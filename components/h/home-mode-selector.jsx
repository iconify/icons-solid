import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vkfe44pyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 14.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm6 0V11m0-7.25v2m-7.5 4.5l-1.75-1m16.75 1l1.75-1");
}
</style><path class="vkfe44pyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:home-mode-selector"} {...others} />);
}

export default Component;
