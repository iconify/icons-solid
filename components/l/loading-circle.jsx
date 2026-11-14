import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xhz_xhbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM17 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm2.5 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM17 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-6 2.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM5 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-2.5-6a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM5 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="xhz_xhbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loading-circle"} {...others} />);
}

export default Component;
