import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lq-qnem4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5V10m5 10.5V7m5 13.5V13M5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5-3a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="lq-qnem4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-lollipop"} {...others} />);
}

export default Component;
