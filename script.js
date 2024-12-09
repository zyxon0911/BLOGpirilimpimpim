function changeTheme(theme) {
  const themeStyle = document.getElementById('theme-style');
  themeStyle.href = `styles/${theme}.css`;
}
function openNav() {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("open-btn").style.display = "none"; // Esconde o botão de abrir
}

// Função para fechar o menu
function closeNav() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("open-btn").style.display = "block"; // Mostra o botão de abrir
}
