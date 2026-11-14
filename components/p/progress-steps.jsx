import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tr-ntibgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0H10m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h3.5m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="tr-ntibgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:progress-steps"} {...others} />);
}

export default Component;
