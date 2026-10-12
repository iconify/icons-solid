import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f31x8nbqh {
  d: path("M5.5 15.25c.8-2.75 2.45-2.75 3.25 0s2.45 2.75 3.25 0s2.45-2.75 3.25 0s2.45 2.75 3.25 0m-4.75-4.75V6.75m-1.5 1.5l1.5-1.5l1.5 1.5m2-1.5v3.75M15.75 9l1.5 1.5l1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mrqc7nh_b {
  width: 18.5px;
  height: 16px;
  x: 2.75px;
  y: 4px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="mrqc7nh_b"/><path class="f31x8nbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tide-chart"} {...others} />);
}

export default Component;
