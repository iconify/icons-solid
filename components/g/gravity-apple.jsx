import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hc2d5bb6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5c-3-2-7.5-1-7.5 4c0 4.5 3.5 8 7.5 6.5c4 1.5 7.5-2 7.5-6.5c0-5-4.5-6-7.5-4m0 0l.5-3M8 2.5v3m8-3v3");
}
</style><path class="hc2d5bb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gravity-apple"} {...others} />);
}

export default Component;
