/* filepath: c:\Users\Admin\Desktop\touqeer-prec\script.js */

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        faqItem.classList.toggle('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button Click Handlers
document.querySelector('.btn-primary').addEventListener('click', function() {
    console.log('Get Started clicked');
    alert('Get Started button clicked!');
});

document.querySelector('.btn-secondary').addEventListener('click', function() {
    console.log('Explore clicked');
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

console.log('Website loaded successfully!');