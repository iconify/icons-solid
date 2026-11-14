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

.tb9coabsb {
  d: path("M10 20.5H4A1.5 1.5 0 0 1 2.5 19V5A1.5 1.5 0 0 1 4 3.5h16A1.5 1.5 0 0 1 21.5 5v14a1.5 1.5 0 0 1-1.5 1.5h-6");
}

.y973-nb8k {
  d: path("M5.25 6.25h3v4.25h-3Zm5.25 0h3v4.25h-3Zm5.25 0h3v4.25h-3Z");
}
</style><g class="hntgybcog"><path class="tb9coabsb"/><path class="y973-nb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:factory-floor-plan"} {...others} />);
}

export default Component;
