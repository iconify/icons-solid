import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uickk25tw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.25V4.75a1 1 0 0 1 1-1h2.5M19 20.25V4.75a1 1 0 0 0-1-1h-2.5M12 17.5V8m-2.75 2.75L12 8l2.75 2.75");
}
</style><path class="uickk25tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ceiling-sign"} {...others} />);
}

export default Component;
