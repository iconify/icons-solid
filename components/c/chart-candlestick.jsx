import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ov0-j9oan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5V7m-.75 0h1.5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 8.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 7.25 7M8 15v3.5m8-13v4m-.75 0h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5a1.75 1.75 0 0 1 1.75-1.75m.75 7v4");
}
</style><path class="ov0-j9oan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-candlestick"} {...others} />);
}

export default Component;
