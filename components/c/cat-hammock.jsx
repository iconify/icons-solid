import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwuqhybtp {
  d: path("M2.5 20.5L5 3.5h14l2.5 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wo62obb1n {
  d: path("M7.5 11c2 6 7 6 9 0c-2 2.5-7 2.5-9 0M7 3.5l.5 7.5M17 3.5l-.5 7.5");
}
</style><g class="hntgybcog"><path class="gwuqhybtp"/><path class="wo62obb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cat-hammock"} {...others} />);
}

export default Component;
