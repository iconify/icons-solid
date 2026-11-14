import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhk1_jbjb {
  d: path("M3.5 9a5.5 4.5 0 1 0 11 0a5.5 4.5 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pzq_x65sz {
  d: path("M11.016 12.891za1.375 1.375 0 0 1 1.945 0l4.773 4.773a1.375 1.375 0 0 1 0 1.945a1.375 1.375 0 0 1-1.945 0l-4.773-4.773a1.375 1.375 0 0 1 0-1.945M7.5 7.5h.01m2.99 3h.01");
}
</style><g class="hntgybcog"><path class="bhk1_jbjb"/><path class="pzq_x65sz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:body-brush"} {...others} />);
}

export default Component;
