import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wm906sb-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21v-5.5H6A2.5 2.5 0 0 1 3.5 13V8.5a1.5 1.5 0 0 1 3 0v4H10v-8a2 2 0 0 1 4 0v6h3.5v-4a1.5 1.5 0 0 1 3 0V11a2.5 2.5 0 0 1-2.5 2.5h-4V21M3 21h18");
}
</style><path class="wm906sb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:desert-cactus-scene"} {...others} />);
}

export default Component;
