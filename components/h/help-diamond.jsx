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

.jo6c5qbov {
  d: path("M10 9.5c0-1.1.9-1.75 2-1.75s2 .65 2 1.75c0 1.5-2 1.75-2 3.25m0 3h.01");
}
</style><g class="hntgybcog"><path class="idzuq1b9l"/><path class="jo6c5qbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:help-diamond"} {...others} />);
}

export default Component;
