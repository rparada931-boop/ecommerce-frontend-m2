let contador = 0;

function agregarAlCarrito() {
    contador++;
    // Actualiza el número en la navbar en tiempo real
    document.getElementById('contador-carrito').innerText = contador;
    alert("¡Producto agregado con éxito!");
}