import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1lvvsnda {
  d: path("M11 13V4.5a8.5 8.5 0 1 0 8.5 8.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3bwo_e5b {
  d: path("M13.5 10.5v-8a8 8 0 0 1 8 8ZM10 12.75c0-.5-.5-.75-1.25-.75s-1.25.5-1.25 1c0 1.25 2.5.75 2.5 2.5c0 .5-.5 1-1.25 1S7.5 16 7.5 15.75m1.25-4.5V12m0 4.5v.75");
}
</style><g class="hntgybcog"><path class="a1lvvsnda"/><path class="l3bwo_e5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:statement-tax-withheld"} {...others} />);
}

export default Component;
