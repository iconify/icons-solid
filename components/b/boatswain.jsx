import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k78okebtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5c0-3.75 8-3.75 8 0m-9.5 0h11M8.25 9.25a3.75 3.75 0 0 0 7.5 0M4.5 21.5c0-3 3.25-5.25 7.5-5.25q.684 0 1.33.076m4.42 2.174a1 1 0 0 1 2 0a2 2 0 0 1-4 0a3 3 0 0 1 6 0");
}
</style><path class="k78okebtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:boatswain"} {...others} />);
}

export default Component;
