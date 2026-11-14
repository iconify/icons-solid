import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7wk53b2o {
  d: path("M5.5 3H7v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lvzrmpbqe {
  d: path("M7 11q2.5-1.5 5 0t5 0m-7 5h.01m3.99-.5h.01");
}
</style><g class="hntgybcog"><path class="a7wk53b2o"/><path class="lvzrmpbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mixture"} {...others} />);
}

export default Component;
