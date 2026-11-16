// 1, Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementaryByI('sapaButton')
// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode ini ketika tombol di klik klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
