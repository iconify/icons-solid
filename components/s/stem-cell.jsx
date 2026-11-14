import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dz7_uxe-m {
  d: path("m11.75 9.5l3-3M13 6.25l1.75.25v1.75M12.25 12H15m-1.5-1.5L15 12l-1.5 1.5m-1.75 1l3 3m-1.75.25l1.75-.25v-1.75M17 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 5.5h.75a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 19.75 14H19a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 19 10m-2 9.5a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.odmvtlbsj {
  d: path("M2.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.w4cj3dn8z {
  fill: currentColor;
  d: path("M5.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="odmvtlbsj"/><path class="w4cj3dn8z"/><path class="dz7_uxe-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stem-cell"} {...others} />);
}

export default Component;
