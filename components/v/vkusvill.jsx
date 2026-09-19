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

.oqr8uil6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.008 24c1.819 0 3.294 1.506 3.294 3.365s-1.475 3.365-3.294 3.365h-5.434V17.27h5.434c1.819 0 3.293 1.507 3.293 3.365S18.827 24 17.008 24m0 0h-5.434m21.559 0c1.819 0 3.294 1.506 3.294 3.365s-1.475 3.365-3.294 3.365h-8.728V17.27h8.728c1.819 0 3.294 1.507 3.294 3.365S34.952 24 33.133 24m0 0h-8.728");
}
</style><rect class="j3s9ivbxi"/><path class="oqr8uil6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vkusvill"} {...others} />);
}

export default Component;
