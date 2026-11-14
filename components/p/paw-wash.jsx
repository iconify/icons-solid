import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2tv12bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4-4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM8 19c0-2.25 2-3.5 4-3.5s4 1.25 4 3.5c0 2-2 2.5-4 2c-2 .5-4 0-4-2ZM5.5 2.5S4 4.5 4 5.5a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Zm6.5 0s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Zm6.5 0s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Z");
}
</style><path class="z2tv12bhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:paw-wash"} {...others} />);
}

export default Component;
