import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yh4pdx93r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.58a6.5 6.5 0 1 0 8.5 0M9.5 5.5V12m9-9.25a3.5 3.5 0 1 0 2.75 5.5a3.25 3.25 0 0 1-2.75-5.5");
}
</style><path class="yh4pdx93r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:standby-power"} {...others} />);
}

export default Component;
