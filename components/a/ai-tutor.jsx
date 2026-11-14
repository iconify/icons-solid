import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6l4gxbpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6h3.5A5.25 5.25 0 0 1 19 11.25v1.5A5.25 5.25 0 0 1 13.75 18h-3.5A5.25 5.25 0 0 1 5 12.75v-1.5A5.25 5.25 0 0 1 10.25 6M12 2.5V6m-2.5 5.5h.01m4.99 0h.01M3 11v2.5M21 11v2.5M9.5 15h5");
}
</style><path class="c6l4gxbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ai-tutor"} {...others} />);
}

export default Component;
