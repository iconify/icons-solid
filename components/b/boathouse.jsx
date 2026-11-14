import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-b4vmppo {
  d: path("M6.5 21v-9h11v9");
}

.bsa6d-9yr {
  d: path("M9 16.5h6L13.75 19h-3.5Z");
}

.e4z_quizr {
  d: path("M3.5 21V10L12 3.5l8.5 6.5v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e4z_quizr"/><path class="b-b4vmppo"/><path class="bsa6d-9yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boathouse"} {...others} />);
}

export default Component;
