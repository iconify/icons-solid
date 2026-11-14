import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2zt3jbsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8.5c1.25 0 2-2 5-2s5 2.5 5 5.75s-2 5.5-5 5.5c-2.75 0-3.5-2-5-2S9.5 19 6.5 19c-2.75 0-4-3.5-4-7s1.25-7 4-7c3 0 3.5 3.5 5 3.5Zm-5 3.5h.01");
}
</style><path class="h2zt3jbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blob-two"} {...others} />);
}

export default Component;
