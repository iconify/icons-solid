import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_godccaa {
  d: path("m7 17l4.5-4l3.5-2l4-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrjqjgbgu {
  d: path("M3.5 3.5v17h17M7 6.5h13.5");
}
</style><g class="hntgybcog"><path class="zrjqjgbgu"/><path class="g_godccaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:burnup-chart"} {...others} />);
}

export default Component;
