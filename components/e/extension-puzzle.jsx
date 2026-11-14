import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dchu32b0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h5.25a2.5 2.5 0 0 1 5 0H18v4.25a2.5 2.5 0 0 1 0 5V21h-4.25a2.5 2.5 0 0 0-5 0H3.5Z");
}
</style><path class="dchu32b0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:extension-puzzle"} {...others} />);
}

export default Component;
