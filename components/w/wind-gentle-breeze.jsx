import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzl27690x {
  d: path("M4.5 9q0-4 4-4q0 4-4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jky2v4bad {
  d: path("M3 9h12a3 3 0 1 0-3-3m-9 9h14.5a3 3 0 1 1-3 3");
}
</style><g class="hntgybcog"><path class="jky2v4bad"/><path class="dzl27690x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wind-gentle-breeze"} {...others} />);
}

export default Component;
