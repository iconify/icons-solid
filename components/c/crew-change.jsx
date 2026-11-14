import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bha0lrngm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3 1.75-4.75 4-4.75s4 1.75 4 4.75Zm11 0c0-3 1.75-4.75 4-4.75s4 1.75 4 4.75ZM4 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM6.5 5c2-3 9-3 11 0m-2.5.25L17.5 5l.5-2.5M9 5.25L6.5 5L6 2.5");
}
</style><path class="bha0lrngm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crew-change"} {...others} />);
}

export default Component;
