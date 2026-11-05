const titulo = document.getElementById('titulo');
const boton = document.getElementById('btnCambiar');

 boton.addEventListener('click', () => {
  titulo.textContent = '¡Bienvenido a tu página web!';
  titulo.style.color = '#e80d0d';
}); 