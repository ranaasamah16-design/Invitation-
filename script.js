// ===========================
// Open Invitation
// ===========================

const loader = document.getElementById("loader");
const openBtn = document.getElementById("openInvitation");

openBtn.addEventListener("click", () => {

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);

});

// ===========================
// Countdown Timer
// ===========================

const weddingDate = new Date("August 16, 2026 10:30:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);

// ===========================
// Scroll Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===========================
// RSVP Form
// ===========================

const form = document.getElementById("rsvpForm");
const thanks = document.getElementById("thanksMessage");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("guestName").value;

thanks.innerHTML="❤️ Thank you, <b>"+name+"</b>! Your RSVP has been recorded. We look forward to celebrating with you.";

form.reset();

});
}
