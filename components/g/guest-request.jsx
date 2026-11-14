import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o_idos82w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 13V7.25a1.75 1.75 0 0 0-3.5 0V5.5a1.75 1.75 0 0 0-3.5 0V4.25a1.75 1.75 0 0 0-3.5 0v2a1.75 1.75 0 0 0-3.5 0v6.25l-1-1.25c-1-.75-2.25 0-1.75 1.25l2.5 4.75c1 2.25 2.5 4.25 5.25 4.25h3.5C18 21.5 20 19 20 16ZM9.5 6.25v5.25m3.5-6v6m3.5-4.25v4.25");
}
</style><path class="o_idos82w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:guest-request"} {...others} />);
}

export default Component;
