import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fv73dcbjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 2.5h7.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 7h-7.5A2.25 2.25 0 0 1 9.5 4.75a2.25 2.25 0 0 1 2.25-2.25m0 7.25h7.5A2.25 2.25 0 0 1 21.5 12a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 9.5 12a2.25 2.25 0 0 1 2.25-2.25m0 7.25h7.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 11.75 17M2.5 4.5l2 2l3-3m-5 8.25l2 2l3-3");
}
</style><path class="fv73dcbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:poll-multi-choice"} {...others} />);
}

export default Component;
