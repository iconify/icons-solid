import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7ovdgi9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-9 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5-9h4M5.5 8v4m5.25 3a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM18 18l3.5 3.5");
}
</style><path class="e7ovdgi9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:graph-query"} {...others} />);
}

export default Component;
