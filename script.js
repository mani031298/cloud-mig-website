// script.js

// Smooth Scroll Navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    let valid = true;
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (!valid) e.preventDefault();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate');

const scrollAnimation = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    animatedElements.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);

// Initial call to display elements based on user scroll position
scrollAnimation();
