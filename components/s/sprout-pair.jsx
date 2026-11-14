import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3dy98b1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5V10m0 0c0-4-2.5-6.5-7.5-6.5c0 4 3 6.5 7.5 6.5m0 0c0-4 2.5-6.5 7.5-6.5c0 4-3 6.5-7.5 6.5");
}
</style><path class="i3dy98b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sprout-pair"} {...others} />);
}

export default Component;
