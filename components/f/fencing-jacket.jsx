import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_8d8xb-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6v2.75l4.5 1.25L21 13l-2.5.5v8h-13v-8L3 13l1.5-6.5L9 5.25Zm0 2.75h6m-1 0L9 21.5");
}
</style><path class="b_8d8xb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fencing-jacket"} {...others} />);
}

export default Component;
