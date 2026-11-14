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

.loe9cmdpg {
  d: path("M15.75 17L19 18.5l2.5-2");
}

.yl29hbcqn {
  d: path("M7.5 14a4.5 5.5 0 1 0 9 0a4.5 5.5 0 1 0-9 0M2.25 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-5.75 8h.01m3.99 0h.01");
}
</style><g class="hntgybcog"><path class="yl29hbcqn"/><path class="loe9cmdpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aye-aye"} {...others} />);
}

export default Component;
