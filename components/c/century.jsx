import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jkjitac_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h13v5h-13Zm13 2.5h6m-17-12L6 4v7m3-3.5a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0Zm6.75 0a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0Z");
}
</style><path class="jkjitac_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:century"} {...others} />);
}

export default Component;
