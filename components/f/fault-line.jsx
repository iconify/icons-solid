import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ix5_w6bpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.25H11l-1.5 4.5l3 3l-2 4.5h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2ZM15 4.75h4.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l2-4.5l-3-3Z");
}
</style><path class="ix5_w6bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fault-line"} {...others} />);
}

export default Component;
