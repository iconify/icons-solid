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

.kaluqhbqc {
  d: path("m3 21l11-11m0 0c-1.5-3.5 0-6.5 3.25-7.5C18 6 17 8.5 14 10");
}

.m906kjbdw {
  d: path("M14 10c2-3 5-3.75 7.5-3c-1.25 3.25-4 4.5-7.5 3");
}
</style><g class="hntgybcog"><path class="kaluqhbqc"/><path class="m906kjbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cat-wand"} {...others} />);
}

export default Component;
