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

.idzuq1b9l {
  d: path("m14.475 4.975l4.55 4.55a3.5 3.5 0 0 1 0 4.95l-4.55 4.55a3.5 3.5 0 0 1-4.95 0l-4.55-4.55a3.5 3.5 0 0 1 0-4.95l4.55-4.55a3.5 3.5 0 0 1 4.95 0");
}

.p5ropsb8n {
  d: path("M7.5 13.5H8a1.75 1.75 0 0 1 3.5 0h1a1.75 1.75 0 0 1 3.5 0h.5");
}
</style><g class="hntgybcog"><path class="idzuq1b9l"/><path class="p5ropsb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:uneven-road-sign"} {...others} />);
}

export default Component;
