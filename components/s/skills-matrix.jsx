import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ta383udvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5V5.5M12 4.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5V5.5m6.5-1.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5V5.5m-13 5.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5V12m6.5-1.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5V12m-6.5 5.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5v1.25M16.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-6.5 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="ta383udvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skills-matrix"} {...others} />);
}

export default Component;
