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

.lkjxqqocp {
  d: path("M8.875 3h6.25A4.375 4.375 0 0 1 19.5 7.375v9.25A4.375 4.375 0 0 1 15.125 21h-6.25A4.375 4.375 0 0 1 4.5 16.625v-9.25A4.375 4.375 0 0 1 8.875 3");
}

.rd9o0bc-t {
  d: path("M8 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m0-7h.01m2.99 0h5");
}
</style><g class="hntgybcog"><path class="lkjxqqocp"/><path class="rd9o0bc-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:washing-machine"} {...others} />);
}

export default Component;
