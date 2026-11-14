import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fp1-7201b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19.5c7.5 0 3.5-15 11-15m-15 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15-15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="fp1-7201b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bezier-curve"} {...others} />);
}

export default Component;
