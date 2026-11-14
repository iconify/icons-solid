import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgbkqfb5l {
  d: path("M3.5 5h8a5 5 0 0 1 5 5v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ojxamrbwd {
  d: path("m12.5 15l4 4l4-4");
}
</style><g class="hntgybcog"><path class="cgbkqfb5l"/><path class="ojxamrbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-turn-down-right"} {...others} />);
}

export default Component;
