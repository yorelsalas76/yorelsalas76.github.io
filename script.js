function hide() {
    document.querySelector('.proyecto1').style.display = 'none';
    document.querySelector('.proyecto2').style.display = 'none';
    document.querySelector('.proyecto3').style.display = 'none';
    document.querySelector('.proyecto4').style.display = 'none';
    document.querySelector('.proyecto5').style.display = 'none';
}


document.querySelector('.proyecto1-button').onclick = function(){
 hide();
 document.querySelector('.proyecto1').style.display = 'block';
}

document.querySelector('.proyecto2-button').onclick = function(){
    hide();
    document.querySelector('.proyecto2').style.display = 'block';
   }

   document.querySelector('.proyecto3-button').onclick = function(){
    hide();
    document.querySelector('.proyecto3').style.display = 'block';
   }

   document.querySelector('.proyecto4-button').onclick = function(){
    hide();
    document.querySelector('.proyecto4').style.display = 'block';
   }

   document.querySelector('.proyecto5-button').onclick = function(){
    hide();
    document.querySelector('.proyecto5').style.display = 'block';
   }



// Función para mostrar la información del Pokémon
function showProyecto1(pokemonName) {            
    // Ocultar todos los Pokémon
    hidePokemon();
    // Mostrar el Pokémon seleccionado
    document.getElementById(pokemonName).style.display = 'block';
}