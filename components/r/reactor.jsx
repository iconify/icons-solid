import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jv07upbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.5q3-6.5 2-12h9q-1 5.5 2 12ZM8 6.5a2.25 2.25 0 0 1 3-3a2.5 2.5 0 0 1 4.5 1a2 2 0 0 1 .5 2Z");
}
</style><path class="jv07upbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reactor"} {...others} />);
}

export default Component;
