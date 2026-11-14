import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k1y_hyb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3q4 4 8 0l4.5 2l1 4l-3.5 1v4.5c0 2.5-2.5 4-3.5 6h-5c-1-2-3.5-3.5-3.5-6V10L2.5 9l1-4Zm2.5 14.25h3");
}
</style><path class="k1y_hyb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baby-onesie"} {...others} />);
}

export default Component;
