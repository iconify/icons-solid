import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sv4esbb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v2.5h-19ZM5 12h5l-.75 5h-3.5Zm9 0h5l-.75 5h-3.5Zm-6.5 0V8m0 1.5c0-2.5-1.75-4-4.25-4c0 2.5 1.75 4 4.25 4Zm0-1.5c0-2.5 1.75-4 4-4c0 2.5-1.75 4-4 4Zm7.5 4V6.5a1.5 1.5 0 0 1 3 0V12");
}
</style><path class="sv4esbb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:indoor-garden"} {...others} />);
}

export default Component;
