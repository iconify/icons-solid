import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qyiai0x0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75S6 8.5 6 14a6 6 0 0 0 12 0c0-2.5-1.5-4.5-2.5-5.5c0 2-1.5 2.5-2 2.5c0-3-1.5-8.25-1.5-8.25");
}
</style><path class="qyiai0x0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reward-streak"} {...others} />);
}

export default Component;
