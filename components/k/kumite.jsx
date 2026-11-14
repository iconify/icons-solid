import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzus1_b1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 5.75l-4-1v5L3.5 21M6 14.5L9 21m7-16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-2 5.75l4-1v5l2.5 6.5M18 14.5L15 21m-3-4.5v5");
}
</style><path class="fzus1_b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kumite"} {...others} />);
}

export default Component;
