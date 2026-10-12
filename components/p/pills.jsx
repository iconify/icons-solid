import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g0gbqmb1l {
  cx: 8.5px;
  cy: 8.5px;
  r: 5.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uozso8b5o {
  width: 9.5px;
  height: 6px;
  x: 11.75px;
  y: 15.25px;
  rx: 3px;
}

.whfby4ybr {
  d: path("m5.25 11.75l6.5-6.5");
}

.x9ffbhbfz {
  d: path("M16.5 15.25v6");
}
</style><g class="hntgybcog"><circle class="g0gbqmb1l"/><path class="whfby4ybr"/><rect class="uozso8b5o"/><path class="x9ffbhbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pills"} {...others} />);
}

export default Component;
