import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjw8ws4ni {
  d: path("M3 21L7.5 3.5h9L21 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n391k4b8t {
  d: path("m10.5 10.5l2-1.75V17m-2 0h4");
}
</style><g class="hntgybcog"><path class="hjw8ws4ni"/><path class="n391k4b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parking-bay-number"} {...others} />);
}

export default Component;
