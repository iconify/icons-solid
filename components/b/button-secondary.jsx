import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-r7rzbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.75V9A2.5 2.5 0 0 1 5 6.5h2.5m2.75 0h3.5m2.75 0H19A2.5 2.5 0 0 1 21.5 9v.75m0 4.5V15a2.5 2.5 0 0 1-2.5 2.5h-2.5m-2.75 0h-3.5m-2.75 0H5A2.5 2.5 0 0 1 2.5 15v-.75m6-2.25h7");
}
</style><path class="e-r7rzbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:button-secondary"} {...others} />);
}

export default Component;
