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

.k35tnqbpx {
  d: path("m14.322 6.899l5.146 9.751a2.625 2.625 0 0 1-2.322 3.85H6.854a2.625 2.625 0 0 1-2.322-3.85l5.146-9.751a2.625 2.625 0 0 1 4.644 0");
}

.wc1pm8b5h {
  d: path("M10.5 18v-7.5c2.5 1.75 3.25 4 3.25 7.5Z");
}
</style><g class="hntgybcog"><path class="k35tnqbpx"/><path class="wc1pm8b5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:warning-sharp-blade"} {...others} />);
}

export default Component;
