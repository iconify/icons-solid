import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6s4ost_k {
  d: path("M21 18L17.5 18M17.5 18L14 18M17.5 18L17.5 14.5M17.5 18L17.5 21.5");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q9lv46bbv {
  d: path("M11 16H3");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.toja6_c9f {
  d: path("M21 11L3 11");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ynnqgt8sp {
  d: path("M21 6L3 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="ynnqgt8sp"/><path class="toja6_c9f"/><path class="q9lv46bbv"/><path class="a6s4ost_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-plus-minimalistic-line-duotone"} {...others} />);
}

export default Component;
