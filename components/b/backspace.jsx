import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1z3slb4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 6h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5-5a1.414 1.414 0 0 1 0-2l5-5zm-2 4l4 4m0-4l-4 4");
}
</style><path class="p1z3slb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:backspace"} {...others} />);
}

export default Component;
