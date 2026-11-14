import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcmc_xbqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15h10l-1.25 6h-7.5Zm5 0V7.75M9.75 11L12 13.25L14.25 11m-4-6a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0ZM4 9.5a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0Zm10 0a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0Z");
}
</style><path class="dcmc_xbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jade-plant"} {...others} />);
}

export default Component;
