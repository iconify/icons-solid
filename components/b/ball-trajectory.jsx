import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9tr9tbtn {
  d: path("M11 8a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j17mt-bad {
  d: path("M13 4q2 4 0 8m6-8q-2 4 0 8M2.5 21q1.5-8 6-9.5");
}
</style><g class="hntgybcog"><path class="c9tr9tbtn"/><path class="j17mt-bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ball-trajectory"} {...others} />);
}

export default Component;
