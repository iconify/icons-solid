import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ex_-tdmpb {
  d: path("M7 6h10a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 17 18H7a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 7 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tvgwi4boa {
  d: path("m3.5 8l8.5 6l8.5-6");
}
</style><g class="hntgybcog"><path class="ex_-tdmpb"/><path class="tvgwi4boa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:envelope-parcel"} {...others} />);
}

export default Component;
