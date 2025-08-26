  const cards = document.querySelectorAll('.client-card');
  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      card.style.opacity = "0.5";
      if (i === index) {
        card.classList.add('active');
        card.style.opacity = "1";
      }
    });
  }

  document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % cards.length;
    showCard(current);
  });

  document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  });

  showCard(current);

  document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  
document.querySelector(".contact-btn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
