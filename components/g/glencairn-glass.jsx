import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fy_w5pjjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3h5c0 3 2.5 5.5 2.5 9.5c0 3-2 4.5-5 4.5s-5-1.5-5-4.5C7 8.5 9.5 6 9.5 3M12 17v2m-2.75 0h5.5A1.25 1.25 0 0 1 16 20.25a1.25 1.25 0 0 1-1.25 1.25h-5.5A1.25 1.25 0 0 1 8 20.25A1.25 1.25 0 0 1 9.25 19");
}
</style><path class="fy_w5pjjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:glencairn-glass"} {...others} />);
}

export default Component;
