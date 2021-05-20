function generarAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo)
}

let contadorComputadora = 0
let contadorPersona = 0

document.querySelector('.comp-p').textContent = 'Computadora: ' + contadorComputadora
document.querySelector('.pers-p').textContent = 'Persona: ' + contadorPersona

let ultimo = ''
function tems (texto) {
    function alea() {
        var gene = generarAleatorio(0, 3)
        if(gene == 0) {
            ultimo = 'piedra'
            return '✊'
        }
        if(gene == 1) {
            ultimo = 'papel'
            return '✋'
        }
        if(gene == 2) {
            ultimo = 'tijera'
            return '✌'
        }
    }
    // TEM 2
    const contenedor1 = document.querySelector('.persona'),
    template = document.querySelector('#p').content,
    fragment1 = document.createDocumentFragment(),
    pcontent1 = [
                
            ]
            
            pcontent1.push({
                p: texto
            })
            
            pcontent1.forEach(el => {
                template.querySelector('p').textContent = el.p
                
        let clone1 = document.importNode(template, true)
        fragment1.appendChild(clone1)
    })
    contenedor1.appendChild(fragment1)

    
    // TEM 2 (PERSONA)
    const contenedor2 = document.querySelector('.computadora'),
    fragment2 = document.createDocumentFragment(),
    pcontent2 = [
        
            ]
            
            pcontent2.push({
                p: alea()
            })
            
            
            pcontent2.forEach(el => {
                template.querySelector('p').textContent = el.p
                
        let clone2 = document.importNode(template, true)
        fragment2.appendChild(clone2)
    })
    contenedor2.appendChild(fragment2)
}


document.querySelector('.piedra').addEventListener('click', () => {
    document.querySelector('.persona').innerHTML = ''
    document.querySelector('.computadora').innerHTML = ''
    tems('✊')
    if(ultimo == 'tijera') {
        contadorPersona = contadorPersona + 1
    }else if (ultimo == 'papel') {
        contadorComputadora = contadorComputadora + 1
    }
    document.querySelector('.pers-p').textContent = 'Persona: ' + contadorPersona
    document.querySelector('.comp-p').textContent = 'Computadora: ' + contadorComputadora

    if(contadorComputadora < contadorPersona) {
        document.querySelector('.comp-p').style.color = '#dd7070'
        document.querySelector('.pers-p').style.color = 'lightgreen'
    }else if(contadorComputadora > contadorPersona) {
        document.querySelector('.comp-p').style.color = 'lightgreen'
        document.querySelector('.pers-p').style.color = '#dd7070'
    }else {
        document.querySelector('.comp-p').style.color = 'black'
        document.querySelector('.pers-p').style.color = 'black'
    }
})
document.querySelector('.papel').addEventListener('click', () => {
    document.querySelector('.persona').innerHTML = ''
    document.querySelector('.computadora').innerHTML = ''
    tems('✋')
    if(ultimo == 'piedra') {
        contadorPersona = contadorPersona + 1
    }else if (ultimo == 'tijera') {
        contadorComputadora = contadorComputadora + 1
    }
    document.querySelector('.pers-p').textContent = 'Persona: ' + contadorPersona
    document.querySelector('.comp-p').textContent = 'Computadora: ' + contadorComputadora

    if(contadorComputadora < contadorPersona) {
        document.querySelector('.comp-p').style.color = '#dd7070'
        document.querySelector('.pers-p').style.color = 'lightgreen'
    }else if(contadorComputadora > contadorPersona) {
        document.querySelector('.comp-p').style.color = 'lightgreen'
        document.querySelector('.pers-p').style.color = '#dd7070'
    }else {
        document.querySelector('.comp-p').style.color = 'black'
        document.querySelector('.pers-p').style.color = 'black'
    }
})
document.querySelector('.tijera').addEventListener('click', () => {
    document.querySelector('.persona').innerHTML = ''
    document.querySelector('.computadora').innerHTML = ''
    tems('✌')
    if(ultimo == 'papel') {
        contadorPersona = contadorPersona + 1
    }else if (ultimo == 'piedra') {
        contadorComputadora = contadorComputadora + 1
    }
    document.querySelector('.pers-p').textContent = 'Persona: ' + contadorPersona
    document.querySelector('.comp-p').textContent = 'Computadora: ' + contadorComputadora

    if(contadorComputadora < contadorPersona) {
        document.querySelector('.comp-p').style.color = '#dd7070'
        document.querySelector('.pers-p').style.color = 'lightgreen'
    }else if(contadorComputadora > contadorPersona) {
        document.querySelector('.comp-p').style.color = 'lightgreen'
        document.querySelector('.pers-p').style.color = '#dd7070'
    }else {
        document.querySelector('.comp-p').style.color = 'black'
        document.querySelector('.pers-p').style.color = 'black'
    }
})
