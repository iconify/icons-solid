import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s4sxg7fpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 7H11a7 7 0 0 0-7 7v1.5h11.5ZM3 3.5h16m-8 0V7m4.5 3h6V7m-17 12.5h12A1.5 1.5 0 0 0 18 18M8 15.5v4m5-4v4");
}
</style><path class="s4sxg7fpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:helicopter-skids"} {...others} />);
}

export default Component;
