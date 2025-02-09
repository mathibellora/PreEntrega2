// Función para cargar los libros
function IngresarLibros() {
    let libros = []; 
    while (true) {
        let titulo = prompt("Ingrese titulo del libro: (Si no quiere ingresar más libros Cancelar)");
        if (titulo === null) {
            break;
        }
        let anio;
        while (true) {
            anio = prompt(`Ingrese el año del libro "${titulo}":`);
            if (anio === null) {
                alert("El año es obligatorio. Si no deseas ingresar el libro, cancela el título.");
                continue;
            }
            break;
        }
        let libro = {
            titulo : titulo,
            anio : anio,
        };
        
        libros.push(libro);
    }
    if (ContarLibros(libros) == 0) {
        alert("No se ingresó ningún libro, recargar página (F5) para ingresar nuevamente");
    }
    return libros;
}

// Función para contar la cantidad de libros
function ContarLibros(libros) {
    return libros.length;
}

// Función para encontrar el libro mas viejo
function LibroViejo(libros) {
    let masViejo = libros[0];
    for (let i = 0; i < ContarLibros(libros); i++) {
        if (libros[i].anio < masViejo.anio) {
            masViejo = libros[i];
        }
    }
    return masViejo;
}

// Función para mostrar todos los libros
function MostrarLibros(libros) {
    for (let i = 0; i < ContarLibros(libros); i++) {
        let numero = i+1;
        let titulo = libros[i].titulo;
        let anio = libros[i].anio;
        console.log(`${numero}) ${titulo} - ${anio}`);
    }
}

//Ingresar libros al cargar la página
const libros = IngresarLibros();

// Procesar los datos ingresados
const cantidad = ContarLibros(libros);
const masViejo = LibroViejo(libros);
if (cantidad !== 0) {
    confirm (`Se ingresaron ${cantidad} libros, a continuación en consola (F12) se podrán ver los datos procesados`);
    MostrarLibros(libros);
    console.log(`El libro mas viejo ingresado es ${masViejo.titulo} del año ${masViejo.anio}`);
}
