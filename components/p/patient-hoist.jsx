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

.k5gsr10-l {
  d: path("M10 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2.5 8c0-2.5 2-3.25 4.5-3.25s4.5.75 4.5 3.25");
}

.oij0ljbga {
  d: path("M6 2.5h12m-6 0v2M3.5 13L12 4.5l8.5 8.5m-17 0v1.5a8.5 6 0 0 0 17 0V13");
}
</style><g class="hntgybcog"><path class="oij0ljbga"/><path class="k5gsr10-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:patient-hoist"} {...others} />);
}

export default Component;
