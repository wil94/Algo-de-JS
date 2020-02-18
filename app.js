/*
var a = 1
var b = "Wil"
var obj = {
    nombre: "Williams",
    Edad: 25
}

console.log(a)
console.warn(b)
console.error(a)
console.info(b)
*/


/* TODO ASINCRONIA EN JS
function imprimir () {
    for(var i = 0; i <= 8000; i++) {
        console.log("Imprimio")
    }

}
function presionoBoton () {
    console.log("Presiono el boton HTML")
}
imprimir()
*/


// TODO OBJETOS Y REFERENCIAS
/*
var c = {
    nombre: 'Williams'
}
var d = c
console.log(c)
console.log(d)
// TODO tanto la variable c como d, son objetos que ocupan el mismo espacio en memoria; por lo tanto si afectamos a
// sus propiedades en cualquiera afectara a ambos objetos, son diferentes variables que acceden a la misma memoria
*/

/*
var persona = {
    nombre: 'Williams',
    edad: 25,
    direccion: {
        zona: 'Llojeta',
        edificio: {
            nombre: 'Torre Wayne',
            telefono: '2501810'
        }
    }
}
// accediendo al valor del telefono del edificio de esta persona por notacion de puntos
console.log(persona.direccion.edificio.telefono)
// accediendo al valor del telefono del edificio de esta persona por notacion de corchetes
console.log(persona['direccion']['edificio']['telefono'])
// ya que es demasiado codigo y podriamos necesitar manipular los datos del edificio, haremos referencia en otra variable
var edif = persona.direccion.edificio
console.log(edif.telefono)
// esta variable edif hace referencia a la porcion de memoria de persona.direccion.edificio, por lo que si
edif.nro = '2034'
// se habra aumentado una propiedad a edificio del objeto principal
console.log(persona)
*/


/* TODO FUNCIONES
// Las funciones pueden retornar algo (variables primitivas, objetos y funciones), o ejecutar un bloque de codigo
function imprimir (persona = null) {
    console.log(persona)
}
//imprimir({nombre: 'Will'})
//imprimir()

// funcion que retorna un numero decimal aleatorio
function obtenerAleatorio () {
    return Math.random()
}
console.log(obtenerAleatorio())

// Funcion que retorna otra funcion
function retornaFuncion () {
    // retornaremos una funcion anonima
    return function (nombre) {
        console.log('Me llamo ' + nombre)
    }
}
// almacenamos en recibirFuncion la funcion anonima que retorna retornaFuncion
// ahora enviamos un argumento a la funcion que nos retorna
var recibirFuncion = retornaFuncion()
// ejecutamos la funcion
recibirFuncion('Williams')
*/


/*
// TODO OBJETO THIS
// En esta linea se crea un objeto (contexto) GLOBAL window en el browser
// Cuando creamos un objeto se crea otro contexto, que sera del propio nuevo objeto (persona)
var persona = {
    nombres: 'Williams',
    apellido: 'Gutierrez',
    imprimirNombreCompleto: function () {
        //si al hacer la impresion solo refecenciamos nombres y apellido para mostrar el nombre completo,
        //estas propiedades seran buscadas en el window del objeto global y como no existen saldra error.
        //Es por ello que JS tiene la palabra reservada THIS que nos permitira indicar que referenciamos variables,
        //objetos, funciones, propiedades de este contexto (objeto persona)
        console.log(this.nombres + ' ' + this.apellido)
    },
    direccion: {
        // Ya que esta propiedad direccion es un objeto se crea otro contexto
        // Contexto A
        pais: 'Bolivia',
        obtenerDatosPais: function () {
            // Obtenemos en self todo el contexto A
            var self = this
            var imprimirPais = function () {
                //Contexto B
                //Como en este punto no podemos accedes a una variable o propiedad del contexto A
                //porque no lo conocera, pondremos en una variable SELF todo el contexto A, para asi acceder
                //a traves de SELF a las variables de todo ese contexto
                console.log('Direccion en ' + self.pais)
            }
            imprimirPais()
        }
    }
}

// ejecutamos el metodo imprimirNombreCompleto de persona
persona.imprimirNombreCompleto()
persona.direccion.obtenerDatosPais()
*/


/* NEW!!!!!!!!
// Como ya se sabe un objeto es un nuevo contexto, lo que hace new es devolvernos un objeto nuevo y asi un nuevo contexto
// creamos una funcion para retornar los datos de una persona en un nuevo objeto y contexto; y que ademas sera como una
// funcion constructora
// Funcion de Primera Clase que simula una clase en JS, es por eso que esta con Mayuscula la primera letra del nombre de la funcion
function Persona (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    // Hasta este punto hemos puesto los argumentos que llegan a la funcion Persona, las propiedades nombre, apellido y edad
    // en el objeto global window(this)
    // Creamos una funcion que retornara todos los datos recibidos de la persona
    this.imprimirDatosPersona = function () {
        return this.nombre + ' ' + this.apellido + ' ' + '(' + this.edad + ' años)'
    }

}
// Como el nombre, apellido, edad de Persona estan el objeto global, con NEW haremos que estos datos sean devueltos en
// un nuevo objeto llamado Persona y asi tambien creando un nuevo contexto para Persona
var datosWilliams = new Persona('Williams', 'Gutierrez', 25)
// Objeto nuevo
console.log(datosWilliams)
// Accediendo al metodo imprimirDatosPersona del nuevo objeto Persona
console.log(datosWilliams.imprimirDatosPersona())
*/


/* TYPEOF / INSTANCEOF
// creamos el objeto de tipo Persona
function Persona () {
    this.nombre = 'Wil'
    this.edad = 25
}
// Funcion que indica el tipo de una variable y si esta es instancia de un objeto
function identificarTipo (param) {
    // devuelve en string el tipo de dato
    console.log(typeof param)
    // devuelve true o false si la variable es instancia de Persona o no
    console.log(param instanceof Persona)
}
// wil sera instancia de Persona
var wil = new Persona()
// la segunda consola devuelve true ya que wil es instancia de Persona, es decir es del tipo persona
//identificarTipo(wil)
// la segunda consola devuelve false ya que le estamos enviando una cadena cualquiera y esta no es instancia de Persona
identificarTipo('Hola')
*/


/* ARREGLOS PARTE 1
// Declaracion de array
var arr = [5,4,3,2,1]
console.log(arr)
// invertimos el orden en que los elementos se encuentran en el array
arr.reverse()
console.log(arr)
// funcion map
// multiplicamos por el mismo elemneto, igual a elevar al cuadrado
arr = arr.map(function (elemento) {
    elemento *= elemento
    return elemento
})
console.log(arr)
// sacamos su raiz volviendo a sus valores originales
arr = arr.map(Math.sqrt)
console.log(arr)
// unir los elementos en una cadena indicando un caracter
arr = arr.join('|')
console.log(arr)
// separar una cadena por caracter o indicando por cual caracter para colocarlo en el array
arr = arr.split('|')
console.log(arr)
// colocando un elemento al final del array
arr.push('6')
console.log(arr)
// colocando un elemento al principio del array
arr.unshift('0')
console.log(arr)
// eliminando el ultimo elemento
var eliminado = arr.pop()
console.log(arr, eliminado)
// eliminando una posicion n del array
//.splice(desde poisicion a trabajar, numero de elementos)
arr.splice(1, 2)
console.log(arr)
// meter un elemento
arr.splice(1, 1, '10')
// cortar desde hasta de los elementos de un array
arr = arr.slice(1,3)
console.log(arr)
*/


/* ARREGLOS PARTE 2
// Un array puede contener todo tipo de datos dentro de sus elementos en JS (incluido arreglos dentro de un arreglo)
var arre = [
    true,
    {
        nombre: 'Williams',
        apellido: 'Gutierrez'
    },
    function () {
        console.log('Funcion dentro del arreglo')
    },
    function (programador) {
        console.log('Arreglo desarrollado por: ' + programador.nombre + ' ' + programador.apellido)
    },
    [
        'Carlos',
        'Eduardo',
        'Cristian',
        'Dexter',
        [
            'Pedro',
            'Simon',
            'Jose'
        ]
    ]
]
// llamamos al valor bool en la pos 0
console.log(arre[0])
// armamos el nombre completo con el objeto anonimo de la pos 1
console.log(arre[1].nombre + ' ' + arre[1].apellido)
// invocamos la funcion en la pos 2
arre[2]()
// invocamos la funcion enviando un parametro
arre[3](arre[1])
// accedemos al nombre Cristian del arreglo dentro del arreglo
console.log(arre[4][2])
// accedemos al nombre Simon que esta en un arreglo dentro de un arreglo y dentro de otro arreglo
console.log(arre[4][4][1])
*/


/* ARGUMENTS
function miFuncion (a, b, c) {
    // arguments es una palabra reservada de JS que hace referencia a los argumentos enviados a esta funcion
    // OJO hara referencia a los enviados y NO los recibidos; y ya esta implicita en el contexto de esta funcion
    console.log(arguments)
}
// la ejecuacion de la funcion mostrara los valores 2 y 4 que le estamos enviando
miFuncion(2, 4)
*/



/* FUNCIONES Y SU CONTEXTO!!!!!!!!!!!!!



*/


function crearFunciones () {
    var arr = []
    var numero = 1

    arr.push( function () {
        console.log(numero)
    } )

    numero = 2
    
    arr.push( function () {
        console.log(numero)
    } )

    numero = 3
    
    arr.push( function () {
        console.log(numero)
    } )

    numero = 100

    return arr
}

var funciones = crearFunciones()
// Importante!!!! cuando invocamos una funcion o metodo, esta regresa a su contexto, por eso es que si
// invocamos las funciones en el array, este regresara y mostrara el valor de 100 ya que al regresar a
// su contexto el ultimo valor que le damos a numero es 100 y ejecutara con ese valor todos.
funciones[0]()
funciones[1]()
funciones[2]()

// Para hacer prevalecer el valor debemos vincularlo a un nuevo contexto asi en cada incocacion de las
// funciones del array mostrara 1, 2, 3.
function crearFuncionesDos () {
    var arr = []
    var numero = 1

    arr.push(
        (function (numero) {
            return function () {
                console.log(numero)
            }
        })(numero)
    )

    numero = 2
    
    arr.push( 
        () => function () {
            console.log('EEEEE')
        }
    )

    numero = 3
    
    arr.push( function () {
        console.log(numero)
    } )

    numero = 20

    return arr
}

var funcionesDos = crearFuncionesDos()
funcionesDos[0]()
funcionesDos[1]()()
funcionesDos[2]()


/* FUNCIONES FLECHA (estas funciones siempre seran anonimas)
// (A) Funcion declarada propia
function obtenerEdadPersonaFuncionNormal (nombrePersona, anioNacimiento) {
    let Hoy = new Date()
    let anioActual = Hoy.getFullYear()
    let EdadPersona = anioActual - anioNacimiento
    return 'La edad de ' + nombrePersona + ' es: ' + EdadPersona
}
console.log( obtenerEdadPersonaFuncionNormal('Williams', 1994) )

// (B) Funcion declarada propia en variable
var obtenerEdadPersonaFuncionEnVariable = function (nombrePersona, anioNacimiento) {
    let Hoy = new Date()
    let anioActual = Hoy.getFullYear()
    let EdadPersona = anioActual - anioNacimiento
    return 'La edad de ' + nombrePersona + ' es: ' + EdadPersona
}
console.log( obtenerEdadPersonaFuncionEnVariable('Williams', 1994) )

// (C) Funcion flecha con operaciones normales con {}
var obtenerEdadPersonaFuncionFlecha = (nombrePersona, anioNacimiento) => {
    let Hoy = new Date()
    let anioActual = Hoy.getFullYear()
    let EdadPersona = anioActual - anioNacimiento
    return 'La edad de ' + nombrePersona + ' es: ' + EdadPersona
}
console.log( obtenerEdadPersonaFuncionFlecha('Williams', 1994) )

// (D) Funcion flecha con retorno directo
var obtenerEdadPersonaFuncionFlechaRetornoDirecto = (nombrePersona, anioNacimiento) => (
    'La edad de ' + nombrePersona + ' es: ' + (new Date().getFullYear() - anioNacimiento)
)
console.log( obtenerEdadPersonaFuncionFlechaRetornoDirecto('Williams', 1994) )

// TODO Las funciones A, B, C y D hacen lo mismo, reciben 2 parametros para trabajarlos y retornar el nombre y la edad de una persona
// sin embargo varian en sus sintaxis ya que las funciones flechas son mas cortas

// Funcion flecha con retorno directo que recibe un solo parametro (no es necesario el parentesis)
var obtenerCuadrado = N => 'El cuadrado de ' + N + ' es: ' + (N * N)
console.log( obtenerCuadrado(6) )
*/

