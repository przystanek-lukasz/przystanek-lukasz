function copyIP() {
    const ipText = document.getElementById('ip-text').innerText;
    navigator.clipboard.writeText(ipText).then(() => {
        const tooltip = document.querySelector('.tooltip');

        tooltip.innerText = "Skopiowano!";
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
        tooltip.style.top = '-45px';

        setTimeout(() => {
            tooltip.innerText = "Skopiuj IP";
            tooltip.style.opacity = '';
            tooltip.style.visibility = '';
            tooltip.style.top = '';
        }, 2000);
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
});
