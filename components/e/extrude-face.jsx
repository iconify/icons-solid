import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lwhc18fnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 10l6.5 3.25L12 16.5l-6.5-3.25Zm-6.5 3.25v4.5L12 21l6.5-3.25v-4.5M12 16.5V21m0-13.75V2.5M9.5 5L12 2.5L14.5 5");
}
</style><path class="lwhc18fnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:extrude-face"} {...others} />);
}

export default Component;
