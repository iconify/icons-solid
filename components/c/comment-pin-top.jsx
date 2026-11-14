import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbjv5ubeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14A2.5 2.5 0 0 1 6 11.5h12a2.5 2.5 0 0 1 2.5 2.5v1.5A2.5 2.5 0 0 1 18 18h-8l-2.5 2.5V18H6a2.5 2.5 0 0 1-2.5-2.5ZM12 3.5v5.25M9 6.5l3-3l3 3");
}
</style><path class="bbjv5ubeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:comment-pin-top"} {...others} />);
}

export default Component;
