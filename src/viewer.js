import React, { Component } from 'react';
import * as cornerstone from 'cornerstone-core';
// import imageId from './imageId.dcm';

export default class Viewer extends Component {

  renderViewer() {
    const element = document.getElementById('viewer-test');
    console.log(element);
    const imageId = 'http://localhost:8000/imageId.dcm';

    cornerstone.enable(element);
    cornerstone.loadAndCacheImage(imageId).then(function (image) {
      cornerstone.displayImage(element, image);

      // // Enable our tools
      // cornerstoneTools.mouseInput.enable(element);
      // cornerstoneTools.mouseWheelInput.enable(element);
      // cornerstoneTools.wwwc.activate(element, 1); // Left Click
      // cornerstoneTools.pan.activate(element, 2); // Middle Click
      // cornerstoneTools.zoom.activate(element, 4); // Right Click
      // cornerstoneTools.zoomWheel.activate(element); // Mouse Wheel
});
  }

  componentDidMount() {
    console.log('mounted viewer component');
    this.renderViewer();
  }

  render() {
    return (
      <div id='viewer-test' style={{ height: '100%', width: '100%' }}>
        Hello world
      </div>
    )
  }
}
