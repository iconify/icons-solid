import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eprfo-bxo {
  d: path("M32.338 24.857a2.447 2.447 0 1 1 4.894 0v4.037M24.92 26.447a2.447 2.447 0 0 1-2.447 2.447h0a2.447 2.447 0 0 1-2.447-2.447v-1.59a2.447 2.447 0 0 1 2.447-2.448h0a2.447 2.447 0 0 1 2.447 2.447m0 4.038v-6.485");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.pxu7x2bkg {
  d: path("M10.768 19.106v9.788m16.676-4.037a2.447 2.447 0 1 1 4.894 0v4.037m-4.894-6.484v6.484");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><g class="y9tr6bcfx"><path class="pxu7x2bkg"/><path class="eprfo-bxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:i-am"} {...others} />);
}

export default Component;
