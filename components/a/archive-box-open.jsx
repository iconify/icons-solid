import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ua05dhchs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M4.759 4.746l13.787-2.431a2 2 0 0 1 2.317 1.622a2 2 0 0 1-1.622 2.317L5.454 8.685a2 2 0 0 1-2.317-1.622a2 2 0 0 1 1.622-2.317M4 11.5h16M10 15h4");
}
</style><path class="ua05dhchs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:archive-box-open"} {...others} />);
}

export default Component;
