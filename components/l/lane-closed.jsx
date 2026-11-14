import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j18hapnui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.875 2.5h2.25A4.375 4.375 0 0 1 17.5 6.875v.75A4.375 4.375 0 0 1 13.125 12h-2.25A4.375 4.375 0 0 1 6.5 7.625v-.75A4.375 4.375 0 0 1 10.875 2.5M12 12.5V21m-4 0h8M10 5.25l4 4m0-4l-4 4");
}
</style><path class="j18hapnui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-closed"} {...others} />);
}

export default Component;
