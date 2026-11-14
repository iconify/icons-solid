import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.irbv24b5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 12a2.75 2.75 0 0 1 5.5 0a4.125 4.125 0 0 1-8.25 0a5.5 5.5 0 0 1 11 0a6.875 6.875 0 0 1-13.75 0a8.25 8.25 0 0 1 16.5 0");
}
</style><path class="irbv24b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:developing-reel"} {...others} />);
}

export default Component;
