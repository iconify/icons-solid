import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8e1l3onn {
  d: path("M13.169 20.388L12.25 21l-2-1.5L8 21l-2-1.5L4 21V2.5h12.5v13.3M7.5 7H13m-5.5 4H11");
}
</style><g class="hntgybcog"><path class="p8e1l3onn"/><path class="e9fltbcec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:expense-approval"} {...others} />);
}

export default Component;
