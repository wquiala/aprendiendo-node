const fs = require('fs');

const crearArchivo = async (base, listar, hasta) => {
    try {


        let resultado = "";

        for (let i = 0; i <= hasta; i++) {
            resultado += (`${base} x ${i} =  ${base * i}\n`);
        }
        if (listar) {
            console.log(`Tabla del ${base} hasta el ${hasta}`);
            console.log(resultado);

        }


        /*fs.writeFile("tabla_5.txt", resultado, (err) => {
        
            if (err) throw err;
            console.log("Tabla del 5 creada corectamente");
        
        })*/

        fs.writeFileSync(`./salida/tabla del ${base} hasta el ${hasta}.txt`, resultado);
        return `tabla del ${base} hasta el ${hasta}`

    } catch (err) {
        throw err;

    }





}
module.exports = {
    crearArchivo
}