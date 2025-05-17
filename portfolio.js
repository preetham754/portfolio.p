// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
  
    skills.forEach(skill => {
      const progress = skill.querySelector(".progress");
      const percentage = skill.getAttribute("data-skill");
      progress.style.width = percentage;
    });
  });
  
  
  const form = document.getElementById('portfolioContactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // You can add an API or backend logic here to handle submissions.
    alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
    form.reset();
  });  

var typed = new Typed('#typed-name', {
  strings: ['Preetham Reddy Korem'],
  typeSpeed: 90,
  backSpeed: 25,
  showCursor: true
});
