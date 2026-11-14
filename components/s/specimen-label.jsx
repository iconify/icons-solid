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

.q8ovzjbcc {
  d: path("M7.5 5h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-12l-5-7Z");
}

.qfup4acnm {
  d: path("M5.75 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4.75-3.5v7m2.5-7v7m2.5-7v7m2.5-7v7");
}
</style><g class="hntgybcog"><path class="q8ovzjbcc"/><path class="qfup4acnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:specimen-label"} {...others} />);
}

export default Component;
