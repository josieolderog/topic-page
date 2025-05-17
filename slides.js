let slideIndex = 0;
let slides, dots, timer;
const delay = 3000;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.display = "none";
        slide.classList.remove("fade");
        dots[i].classList.remove("active");
    });

    slides[n].style.display = "block";
    slides[n].classList.add("fade");
    dots[n].classList.add("active");
    slideIndex = n;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(n) {
    showSlide(n);
}

function startSlideshow() {
    timer = setInterval(nextSlide, delay);
}

function stopSlideshow() {
    clearInterval(timer);
}

document.addEventListener("DOMContentLoaded", () => {
    slides = Array.from(document.getElementsByClassName("slide-img"));
    dots = Array.from(document.getElementsByClassName("dot"));
    
    showSlide(slideIndex);
    startSlideshow();

    const container = document.getElementById("slideshow-container");
    container.addEventListener("mouseenter", stopSlideshow);
    container.addEventListener("mouseleave", startSlideshow);
    
    document.getElementById("prev").addEventListener("click", prevSlide);
    document.getElementById("next").addEventListener("click", nextSlide);
});
