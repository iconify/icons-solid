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

.pphsu-i_k {
  d: path("M6 7h12.5a2.5 5 0 0 1 0 10H6");
}

.y2aenm0zw {
  d: path("M3 12a3 5 0 1 0 6 0a3 5 0 1 0-6 0m9.5-5v10m3-10v10M6 12h.01");
}
</style><g class="hntgybcog"><path class="pphsu-i_k"/><path class="y2aenm0zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:body-wrap"} {...others} />);
}

export default Component;
