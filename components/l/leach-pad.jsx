import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e00t15byc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M5 20l4-8h6l4 8ZM6.25 3.5c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5Zm5.75 0c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5Zm5.75 0c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5Z");
}
</style><path class="e00t15byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leach-pad"} {...others} />);
}

export default Component;
