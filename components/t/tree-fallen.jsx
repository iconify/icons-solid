import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sjl3slb9t {
  d: path("M15 10.5a3 4 0 1 0 6 0a3 4 0 1 0-6 0m3 0h.01M5 8.5L2.5 7M5 12.5L2.5 14m0 4h19");
}

.xkfcvn5vx {
  d: path("M18 6.5H6.5A1.5 1.5 0 0 0 5 8v5a1.5 1.5 0 0 0 1.5 1.5H18");
}
</style><g class="hntgybcog"><path class="xkfcvn5vx"/><path class="sjl3slb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tree-fallen"} {...others} />);
}

export default Component;
