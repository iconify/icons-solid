import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.icbuavfze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.921 2.5h2.158a1.5 1.5 0 0 1 1.455 1.864l-.25 1A1.5 1.5 0 0 1 12.829 6.5h-1.658a1.5 1.5 0 0 1-1.455-1.136l-.25-1A1.5 1.5 0 0 1 10.921 2.5m-.421 4L7 17l5 4.5l5-4.5l-3.5-10.5");
}
</style><path class="icbuavfze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fathers-day-tie"} {...others} />);
}

export default Component;
