interface DateTimeFormatOptions {
    
}

// Función para convertir Date a formato "YYYY-MM"
export function formatDateToYYYYMM(date:Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso sumamos 1
    return `${year}-${month}`;
}

// Función para convertir Date a formato "MMM YYYY"
export function formatDateToMMMYYYY(date:Date) {
    const options:DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}
