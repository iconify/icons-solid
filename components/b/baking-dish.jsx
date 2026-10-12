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

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.vxsrbil0k {
  d: path("M7 7.5A1.75 1.75 0 1 1 7 11a1.75 1.75 0 1 1 0-3.5m5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5m5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5M7 13a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 1 1 7 13m5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5m5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5");
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="vxsrbil0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baking-dish"} {...others} />);
}

export default Component;
