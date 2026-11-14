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

.q5eybmihs {
  d: path("M2.5 13H8l4.5 2.5c3.5.5 9 .75 9 3.75v.5h-19Zm.875 6.75h2.25a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875h-2.25a.875.875 0 0 1-.875-.875a.875.875 0 0 1 .875-.875");
}

.uu3ib1x9u {
  d: path("M5 15L8.75 2.5h2.5L8 15.5ZM9.75 4.25h.01");
}
</style><g class="hntgybcog"><path class="q5eybmihs"/><path class="uu3ib1x9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shoe-horn"} {...others} />);
}

export default Component;
