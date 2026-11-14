import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6fvks3-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.5 12l-2.75 2.75v4h-4L12 21.5l-2.75-2.75h-4v-4L2.5 12l2.75-2.75v-4h4L12 2.5l2.75 2.75h4v4ZM12 8.5v7M8.5 12h7");
}
</style><path class="h6fvks3-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:badge-plus"} {...others} />);
}

export default Component;
