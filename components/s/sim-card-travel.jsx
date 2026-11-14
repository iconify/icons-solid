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

.l3imynb0j {
  d: path("M6 3.5h8l4 4v13H6Z");
}

.v4r8syhpp {
  d: path("M10.75 11h2.5A1.75 1.75 0 0 1 15 12.75v2.5A1.75 1.75 0 0 1 13.25 17h-2.5A1.75 1.75 0 0 1 9 15.25v-2.5A1.75 1.75 0 0 1 10.75 11M9 14h6");
}
</style><g class="hntgybcog"><path class="l3imynb0j"/><path class="v4r8syhpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sim-card-travel"} {...others} />);
}

export default Component;
