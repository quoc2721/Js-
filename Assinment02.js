
//khai báo biến 


var  goc = 100000000;
var laiSuat = 8/12;         // --> khai báo 
var thogianVay = 12;

console.log(goc, laiSuat, thogianVay);    // dùng hàm console để gọi khai báo ham

 var gocConLai= goc;      // dùng toán tử gán 

var gocHangThang= goc/thogianVay;

for(var i = 0; i<thogianVay; i++ ){       // dùng cấu trúc vòng lặp for 
  var laiPhaiTra = gocConLai * laiSuat;
  var tienPhaiTraHangThang = laiPhaiTra + gocHangThang;

  gocConLai -= gocHangThang;      // sử dụng toán tử gán 

  console.log('Sô gốc còn lại:' + gocConLai.toString() + ' Gốc:' + gocHangThang.toString() + 'Lãi:' + laiPhaiTra.toString() + ' Gốc + Lãi: ' + tienPhaiTraHangThang.toString());  // sử dụng toán tử nối chuỗi, kiểu dữ liệu String 
}



