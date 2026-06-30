const message = `Happy Birthday ❤️

May Allah bless you with endless happiness, good health, success and a beautiful life.

You are very special to me. 😊

Keep smiling forever.

🎂 Happy Birthday Once Again ❤️`;

const typing = document.getElementById("typing");
const music = document.getElementById("music");
const btn = document.getElementById("playBtn");
const hearts = document.getElementById("hearts");
const gift = document.getElementById("openGift");
const welcome = document.getElementById("welcomeScreen");
const main = document.getElementById("mainContent");

let i = 0;

// Typewriter
function typeWriter() {
    if (i < message.length) {
        if (message.charAt(i) === "\n") {
            typing.innerHTML += "<br>";
        } else {
            typing.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 45);
    }
}

// Music Button
btn.addEventListener("click", async () => {
    try {
        await music.play();
        btn.innerHTML = "❤️ Playing...";
        btn.disabled = true;
    } catch (e) {
        alert("Tap again to play music.");
    }
});

// Hearts Animation
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 250);

// Confetti
function createConfetti() {

    const c = document.createElement("div");

    c.innerHTML = "🎉";

    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-30px";
    c.style.fontSize = (20 + Math.random() * 15) + "px";
    c.style.transition = "5s linear";
    c.style.pointerEvents = "none";

    document.body.appendChild(c);

    setTimeout(() => {
        c.style.top = "110vh";
    }, 100);

    setTimeout(() => {
        c.remove();
    }, 5500);

}

setInterval(createConfetti, 500);

// Gift Open
gift.addEventListener("click", async () => {

    welcome.style.display = "none";
    main.style.display = "flex";

    typing.innerHTML = "";
    i = 0;

    typeWriter();

    try {
        await music.play();
        btn.innerHTML = "❤️ Playing...";
        btn.disabled = true;
    } catch (e) {
        console.log("Autoplay blocked");
    }

});
