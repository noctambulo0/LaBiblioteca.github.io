// Generador de fondos degradados aleatorios para cada post
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  post.style.background = `linear-gradient(to bottom right, ${randomColor1}, ${randomColor2})`;
});

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Simulador de visitas
const visitas = {
  'pop-1': 100,
  'pop-2': 50,
  'pop-3': 200
};

// Función para actualizar las visitas de los posts
function actualizarVisitas() {
  for (let id in visitas) {
    const post = document.getElementById(id);
    const visitasElement = document.getElementById(`visitas-${id}`);
    visitasElement.innerText = visitas[id];
  }
  
  ordenarPosts();
}

// Función para ordenar los posts por visitas
function ordenarPosts() {
  const sectionPopulares = document.getElementById('populares');
  const postsPopulares = Array.from(sectionPopulares.getElementsByClassName('post'));

  postsPopulares.sort((a, b) => {
    const visitasA = visitas[a.id];
    const visitasB = visitas[b.id];
    return visitasB - visitasA;
  });

  // Reorganizar los posts en la sección
  postsPopulares.forEach(post => sectionPopulares.appendChild(post));
}

// Simulamos las visitas
setInterval(() => {
  visitas['pop-1'] += Math.floor(Math.random() * 10);
  visitas['pop-2'] += Math.floor(Math.random() * 10);
  visitas['pop-3'] += Math.floor(Math.random() * 10);
  
  actualizarVisitas();
}, 2000);  // Cada 2 segundos incrementamos las visitas

// Inicializamos las visitas y el orden
actualizarVisitas();

// Obtiene el modal
const modal = document.getElementById("creditsModal");

// Muestra el modal al cargar la página
window.onload = function() {
  modal.style.display = "block";

  // Después de 5 segundos, cierra el modal automáticamente
  setTimeout(function() {
    modal.style.display = "none";
  }, 5000); // 5000 ms = 5 segundos
}
