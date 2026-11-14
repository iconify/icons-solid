import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qzp71cbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.5a6 6 0 0 1 12 0m-14.5 0h17m-8.5 0v5m-3.5 0h7M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-5.25 0h2.5m9.5 0h2.5");
}
</style><path class="qzp71cbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pyranometer"} {...others} />);
}

export default Component;
