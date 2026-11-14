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

.qelbh0-8f {
  d: path("M2.5 4.5v13a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-13m-19 2h19");
}

.tp2slzvae {
  d: path("M6 12c2-3.5 6.5-3.5 8.5 0l3-2.5v5l-3-2.5c-2 3.5-6.5 3.5-8.5 0m3 0h.01");
}
</style><g class="hntgybcog"><path class="qelbh0-8f"/><path class="tp2slzvae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aquarium-visit"} {...others} />);
}

export default Component;
