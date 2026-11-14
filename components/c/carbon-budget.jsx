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

.iywm0tbau {
  d: path("M13.5 13.5v8a8 8 0 0 0 8-8Z");
}

.uw0qvqr_x {
  d: path("M10.5 10.5h8a8 8 0 1 0-8 8Z");
}
</style><g class="hntgybcog"><path class="uw0qvqr_x"/><path class="iywm0tbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carbon-budget"} {...others} />);
}

export default Component;
