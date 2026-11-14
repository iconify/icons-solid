import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdoapz1xy {
  d: path("M8.75 5.5L6.5 9h3l-2.25 3.5M21.5 16a2.25 2.25 0 1 1-1.5-1.5M18 18l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rk3mewbqb {
  d: path("M7 2.5h2A3.5 3.5 0 0 1 12.5 6v6A3.5 3.5 0 0 1 9 15.5H7A3.5 3.5 0 0 1 3.5 12V6A3.5 3.5 0 0 1 7 2.5m1 13v3a2.5 2.5 0 0 0 2.5 2.5H12");
}
</style><g class="hntgybcog"><path class="rk3mewbqb"/><path class="fdoapz1xy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:charger-electrician"} {...others} />);
}

export default Component;
