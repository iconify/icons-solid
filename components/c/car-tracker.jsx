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

.mba7c104x {
  d: path("M4.5 11h-1q-1 0-1-1V7.5l3-1.25L8 3h7l2.75 3.25l1.75.5q1 .25 1 1.25v2q0 1-1 1h-3m-8 0h4");
}

.yffe8e-rw {
  d: path("M4.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.25 11c-1.5-1.5-2.75-2.75-2.75-3.25a2.75 2.75 0 0 1 5.5 0c0 .5-1.25 1.75-2.75 3.25");
}
</style><g class="hntgybcog"><path class="mba7c104x"/><path class="yffe8e-rw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-tracker"} {...others} />);
}

export default Component;
