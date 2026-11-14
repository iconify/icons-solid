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

.mw3g3kvga {
  d: path("m13.5 13l3 3l3-3");
}

.v7yd27b-i {
  d: path("M6.5 20V10a5 5 0 0 1 10 0v6");
}
</style><g class="hntgybcog"><path class="v7yd27b-i"/><path class="mw3g3kvga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:u-turn-right"} {...others} />);
}

export default Component;
