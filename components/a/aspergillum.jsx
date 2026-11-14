import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hy9zjp-ua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.328 5.172za3 3 0 0 1 0 4.242l-1.414 1.414a3 3 0 0 1-4.242 0a3 3 0 0 1 0-4.242l1.414-1.414a3 3 0 0 1 4.242 0M12.75 10.75L4.5 19M15 17h.01m3.49-.5h.01m1.99-3h.01");
}
</style><path class="hy9zjp-ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aspergillum"} {...others} />);
}

export default Component;
