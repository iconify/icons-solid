import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpzc2zble {
  d: path("M17 20v-8.5a3 3 0 0 0-3-3H5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0q_0wtau {
  d: path("M8.75 4.75L5 8.5l3.75 3.75");
}
</style><g class="hntgybcog"><path class="cpzc2zble"/><path class="q0q_0wtau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-arrow-left"} {...others} />);
}

export default Component;
