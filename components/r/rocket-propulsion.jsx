import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d65mezbsu {
  d: path("M12 2.5c3.5 2 4.5 5.5 4.5 9v4h-9v-4c0-3.5 1-7 4.5-9M7.5 12l-3 3v2.5l3-2m9-3.5l3 3v2.5l-3-2");
}

.gwdqob9xv {
  d: path("M10.5 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-.5 8.75l2 3l2-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d65mezbsu"/><path class="gwdqob9xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rocket-propulsion"} {...others} />);
}

export default Component;
