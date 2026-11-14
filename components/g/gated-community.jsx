import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gmoi0rbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h3.5v14H3ZM16.6 12H6.5V9h15v3h-2.1m-8.9-3l-1 3M14 9l-1 3m4.5-3l-1 3m-2.25 6L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><path class="gmoi0rbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gated-community"} {...others} />);
}

export default Component;
