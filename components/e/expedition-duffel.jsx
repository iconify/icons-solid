import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxvqi6gum {
  d: path("M10.25 7h3.5A5.25 5.25 0 0 1 19 12.25v4a5.25 5.25 0 0 1-5.25 5.25h-3.5A5.25 5.25 0 0 1 5 16.25v-4A5.25 5.25 0 0 1 10.25 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nx2_xubey {
  d: path("M9 21.5v-16a3 3 0 0 1 6 0v16");
}
</style><g class="hntgybcog"><path class="bxvqi6gum"/><path class="nx2_xubey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:expedition-duffel"} {...others} />);
}

export default Component;
