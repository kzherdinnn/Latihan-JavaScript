document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    let passwordInput = icon.previousElementSibling;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.replace('bx-hide', 'bx-show');
    } else {
      passwordInput.type = "password";
      icon.classList.replace('bx-show', 'bx-hide');
    }
  });
});

document.querySelectorAll('.toggle-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    let formContainer = document.querySelector('.form-container');
    let loginForm = document.querySelector('.login-form');
    let signupForm = document.querySelector('.signup-form');

    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');

    // Adding animation effect on switching forms
    formContainer.style.transform = loginForm.classList.contains('active') ? 'scale(1.05)' : 'scale(1)';
    setTimeout(() => {
      formContainer.style.transform = 'scale(1)';
    }, 300);
  });
});
