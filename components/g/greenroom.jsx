import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vtjv2f-lm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 24A10.5 10.5 0 0 1 24 13.5m0 21A10.5 10.5 0 0 0 34.5 24H24");
}

.yyhollb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8 24A16 16 0 0 1 24 8m16 16a16 16 0 0 1-16 16");
}
</style><circle class="cpk0fnbgt"/><path class="yyhollb7s"/><path class="vtjv2f-lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:greenroom"} {...others} />);
}

export default Component;
