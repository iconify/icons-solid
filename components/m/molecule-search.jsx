import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.unz0koa8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-4.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m14-7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-8 2L6.25 12M13 6.25h3.5M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="unz0koa8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:molecule-search"} {...others} />);
}

export default Component;
