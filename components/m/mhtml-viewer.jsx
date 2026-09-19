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

.qsywutret {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.343 13.945h5.603m-2.802 8.457v-8.457m-10.518 0v8.457m5.603-8.457v8.457m-5.603-4.244h5.603m-16.175 4.235v-8.448l4.229 8.457l4.228-8.444v8.444M5.5 29.005h37M37.597 42.5v-6.378h-27.47V42.5");
}
</style><path class="qsywutret"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mhtml-viewer"} {...others} />);
}

export default Component;
