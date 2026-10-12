import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dweq4bc_s {
  d: path("M7.25 8.9h11m-11 6.2h11M9.5 5.5V6m0 12v.5m6.5-13V6m0 12v.5M2.75 9h2m-2 3h2.5m-2.5 3h2");
}

.eiuo70xzr {
  width: 11px;
  height: 18.5px;
  x: 7.25px;
  y: 2.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="eiuo70xzr"/><path class="dweq4bc_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:frame-rate"} {...others} />);
}

export default Component;
