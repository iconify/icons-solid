import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxdqq5btv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3v9.75m0 4.5V21m6-18v2.75m0 4.5V21m6-18v7.75m0 4.5V21M3.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6-7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="xxdqq5btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:settings-sliders"} {...others} />);
}

export default Component;
