import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhcsjwttb {
  cx: 12px;
  cy: 13.5px;
  r: 7.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pyf30w57g {
  d: path("M9.75 2.75h4.5m-2.25 0v3M17.5 8l1.75-1.75m-8.35 4.62l3.95 2.26q.65.37 0 .74l-3.95 2.26q-.65.37-.65-.38v-4.5q0-.75.65-.38");
}
</style><g class="hntgybcog"><circle class="fhcsjwttb"/><path class="pyf30w57g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:timer-play"} {...others} />);
}

export default Component;
