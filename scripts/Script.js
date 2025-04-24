document.addEventListener('DOMContentLoaded', () => {
  // табы
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // переключение темы
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });
});
