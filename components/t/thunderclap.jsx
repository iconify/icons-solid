import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i20bel1pn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11.5h8.5a3.5 3.5 0 0 0 0-7A4.75 4.75 0 0 0 7 5a3.25 3.25 0 0 0 0 6.5m5.5 2.5L10 17.75h4l-2.5 3.75m7.428-8a8 8 0 0 1 0 8");
}
</style><path class="i20bel1pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thunderclap"} {...others} />);
}

export default Component;
