import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-77m8b5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3a14 14 0 0 1 0 18A14 14 0 0 1 9 3M2.5 8.5h3.75m-3.75 7h3.75m5.5-7l9.25 7m-9.25 0l9.25-7");
}
</style><path class="b-77m8b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:optics"} {...others} />);
}

export default Component;
