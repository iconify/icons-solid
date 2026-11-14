import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jjqjflb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 12a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m9.5-4.5a7 7 0 0 1 0 9m3.25-9.25a9.75 9.75 0 0 1 0 9.5M6.75 7.5a7 7 0 0 0 0 9M3.5 7.25a9.75 9.75 0 0 0 0 9.5");
}
</style><path class="jjqjflb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:massage-ball"} {...others} />);
}

export default Component;
