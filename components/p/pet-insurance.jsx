import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jojo-2blr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10a9 7.5 0 0 1 18 0q-3-1.5-6 0q-3-1.5-6 0q-3-1.5-6 0m4.5 3l2.5 2.25h4L16.5 13v4.5a4.5 4 0 0 1-9 0Zm2.75 4.25h.01m3.49 0h.01");
}
</style><path class="jojo-2blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pet-insurance"} {...others} />);
}

export default Component;
