import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
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

.ryeac8bwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.68 19.905h6.182l-6.182 8.19h6.182m8.402-3.09a3.09 3.09 0 0 1-3.09 3.09h0a3.09 3.09 0 0 1-3.092-3.09v-2.01a3.09 3.09 0 0 1 3.091-3.09h0a3.09 3.09 0 0 1 3.091 3.09m0 5.1v-8.19m-20.528 0h1.348v7.207c0 .543.44.983.983.983h.837");
}
</style><rect class="j3s9ivbxi"/><path class="ryeac8bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:iza"} {...others} />);
}

export default Component;
