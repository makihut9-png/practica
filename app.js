// ==== PASO 7: CREA EL OBJETO DEL PERSONAJE ====
let personaje = {
    nombre: "Lumia",
    clase: "Hechicera",
    mochila: [
        { nombre: "Cuerda", tipo: "Herramienta", peso: 2 },
        { nombre: "Antorcha", tipo: "Iluminación", peso: 0.5 },
        { nombre: "Daga", tipo: "Arma", peso: 1 }
    ]
};

let vidaMonstruo = 100;
let usosRestantes = 4;

// ==== PASO 8: CAPTURA LOS ELEMENTOS DEL DOM ====
// Consigue las etiquetas de la pantalla usando sus ID del HTML
let etiquetaNombre = document.getElementById("nombre-heroe");
let etiquetaClase = document.getElementById("clase-heroe");
let etiquetaVida = document.getElementById("vida-monstruo");
let listaMochila = document.getElementById("lista-mochila");

let botonAtacar = document.getElementById("boton-atacar");
let botonBuscar = document.getElementById("boton-buscar");

// Inicializamos los textos de la pantalla con los datos del objeto
etiquetaNombre.innerText = personaje.nombre;
etiquetaClase.innerText = personaje.clase;

// ==== PASO 4 Y 6: FUNCIÓN PARA MOSTRAR LA MOCHILA ====
function actualizarMochila() {
    listaMochila.innerHTML = "";
    for (let i = 0; i < personaje.mochila.length; i++) {
        // Accedemos a .nombre y .tipo de cada objeto dentro del array
        listaMochila.innerHTML += "<li>" + personaje.mochila[i].nombre + " (" + personaje.mochila[i].tipo + ")</li>";
    }
}
  
    // RE TO: Escribe un bucle 'for' que recorra 'personaje.mochila'.
    // Por cada vuelta, añade el objeto a la lista del HTML.
    // Pista para meterlo en el HTML dentro del bucle:
    // listaMochila.innerHTML += "<li>" + personaje.mochila[i] + "</li>";
    

// Mostramos la mochila por primera vez al cargar la página
actualizarMochila();


// ==== PASO 9: EVENTOS (CLICKS) ====

// Reto de Ataque:
botonAtacar.addEventListener("click", function() {
    vidaMonstruo -= 20 
    if (vidaMonstruo <= 0)
        {etiquetaVida.innerText = "¡Derrotado! 🏆" }
    else {
        etiquetaVida.innerText = vidaMonstruo + "/100" + " puntos"
    }
    // 1. Resta 20 puntos a 'vidaMonstruo'
    // 2. Condicional: Si vidaMonstruo es menor o igual a 0, pon etiquetaVida.innerText = "¡Derrotado! 🏆"
    // 3. Si no (else), actualiza el texto con la nueva vida (ej: vidaMonstruo + "/100")
});

// Agrega esta variable arriba en tu archivo, junto a vidaMonstruo:
// let usosRestantes = 7;

// Reto del Cofre (¡Ahora con límite de usos y personalidad! 📦)
botonBuscar.addEventListener("click", function() {
    
    if (usosRestantes > 0) {
        // 1. Botín normal (lo que ya tenías perfecto)
        let posiblesTesoros = [
            { nombre: "Poción de Vida 🧪", tipo: "Consumible", peso: 0.5 },
            { nombre: "Lentes de Visión Nocturna 👓", tipo: "Artefacto", peso: 1 },
            { Shield: "Escudo de Madera 🛡️", nombre: "Escudo de Madera 🛡️", tipo: "Armadura", peso: 5 },
            { nombre: "Pergamino de Fuego 📜", tipo: "Magia", peso: 0.2 },
            { nombre: "Botas de Velocidad 🥾", tipo: "Equipo", peso: 1.5 }
        ];

        let indiceAleatorio = Math.floor(Math.random() * posiblesTesoros.length);
        let tesoroEncontrado = posiblesTesoros[indiceAleatorio];

        personaje.mochila.push(tesoroEncontrado);
        actualizarMochila(); 

        // Restamos un uso porque encontramos algo
        usosRestantes -= 1;

    } else if (usosRestantes === 0) {
        // 2. Se vació por primera vez
        alert("El cofre está vacío puta. 📭");
        
        // Restamos uno más para que la próxima vez pase al 'else' de insistencia
        usosRestantes -= 1;

    } else {
        // 3. El jugador sigue dándole clic e insistiendo
        alert("¡Te dije que ya está vacío! No va a aparecer nada más por más que presiones. 😮‍💨");
    }
});