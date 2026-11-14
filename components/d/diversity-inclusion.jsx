import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zcix0rkzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m13-4H20a1.75 1.75 0 0 1 1.75 1.75v4.25A1.75 1.75 0 0 1 20 20.25h-4.25A1.75 1.75 0 0 1 14 18.5v-4.25a1.75 1.75 0 0 1 1.75-1.75m-2.254-7.536l1.14 1.878A1.75 1.75 0 0 1 13.14 9.5h-2.28a1.75 1.75 0 0 1-1.496-2.658l1.14-1.878a1.75 1.75 0 0 1 2.992 0");
}
</style><path class="zcix0rkzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:diversity-inclusion"} {...others} />);
}

export default Component;
