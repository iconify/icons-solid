import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atxkqdb3o {
  d: path("M6 14.5q3-2 6 0t6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q1b96s9zw {
  d: path("M2.5 5H6v14h12V5h3.5");
}
</style><g class="hntgybcog"><path class="q1b96s9zw"/><path class="atxkqdb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mine-sump"} {...others} />);
}

export default Component;
