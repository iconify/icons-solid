import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p7tm6xbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h18c0 3-2.5 5-5.5 5h-7c-3 0-5.5-2-5.5-5Zm9-3.5V16M7 9.5h10c0 2-2 3-5 3s-5-1-5-3Zm5 0v-6m-4 3q1-3 4-3t4 3");
}
</style><path class="p7tm6xbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garden-fountain"} {...others} />);
}

export default Component;
