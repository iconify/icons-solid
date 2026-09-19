import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c_xhedcux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.079 29.985c7.414-4.334 12.59-2.942 17.059.258");
}

.cxu7939_s {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 17.779px;
  ry: 19.5px;
}

.hzkd9pwnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.396 28.027c-6.612-2.928-12.06-.893-17.258 2.216c-4.69 2.805-9.412 5.297-14.054 5.894");
}

.ugegszbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.458 26.832c2.31-19.392-18.77-20.763-16.96.427");
}
</style><ellipse class="cxu7939_s"/><path class="c_xhedcux"/><path class="hzkd9pwnc"/><path class="ugegszbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:monti"} {...others} />);
}

export default Component;
