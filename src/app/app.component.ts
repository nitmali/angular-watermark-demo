import { Component, VERSION } from "@angular/core";
import { AfterViewInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  background = "";

  ngAfterViewInit() {
    this.setWatermark();
  }

  setWatermark() {
    // 创建canvas标签
    const watchCanvas = document.createElement("canvas");
    // 隐藏画布
    watchCanvas.style.display = "none";
    // 设置canvas id名
    watchCanvas.id = "watermark-canvas";
    // 设置画布大小
    watchCanvas.width = 260;
    watchCanvas.height = 120;

    // 将画布插入到document中
    document.documentElement.appendChild(watchCanvas);

    // 获取画布
    const canvas = document.getElementById(
      "watermark-canvas"
    ) as HTMLCanvasElement;

    // 获取画布上下文
    const canvasContext = canvas.getContext("2d");

    // 设置字体文字大小及字体类型
    canvasContext.font = "18px 微软雅黑";
    // 设置字体颜色
    canvasContext.fillStyle = "#efefef";

    // 设置旋转角度
    canvasContext.rotate((-30 * Math.PI) / 180);

    // 设置水印文字及相对于画布偏移量;
    canvasContext.fillText("Angular", -40, 80);
    canvasContext.fillText("这是水印", 50, 160);

    // 生成base64
    const dataURL = canvas.toDataURL("image/png");

    // 以下写法不知道为什么无法渲染，以后再研究
    //  将图片作为背景样式插入
    // const box = document.querySelector('') as HTMLElement;
    //  设置背景
    // box.style.background = 'url(' + dataURL + ') #ffffff';

    setTimeout(() => {
      // 设置背景
      this.background = "url(" + dataURL + ") #ffffff";
    });
  }
}
