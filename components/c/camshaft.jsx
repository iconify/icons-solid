import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.njtabdepi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19M4 10.5a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0m6.25 3a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0m6.25-3a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0");
}
</style><path class="njtabdepi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:camshaft"} {...others} />);
}

export default Component;
