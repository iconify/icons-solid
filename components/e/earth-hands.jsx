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

.npdsqcb9n {
  d: path("M9.25 9a2.75 6 0 1 0 5.5 0a2.75 6 0 1 0-5.5 0M6 9h12M2.5 10.5V14a6 6 0 0 0 6 6h2m11-9.5V14a6 6 0 0 1-6 6h-2");
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="hntgybcog"><path class="yoftwf7ei"/><path class="npdsqcb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:earth-hands"} {...others} />);
}

export default Component;
