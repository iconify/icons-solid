import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drks4bwzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h16a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20 11H4a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 4 4Zm8 0v7m2.75 7l2 2L21 15.75");
}
</style><path class="drks4bwzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:medicine-check"} {...others} />);
}

export default Component;
