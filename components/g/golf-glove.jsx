import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nlugwx9vd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21.5v-7L5 11a1.75 1.75 0 0 1 2.5-2.5l1 1V6A1.25 1.25 0 0 1 11 6V4.5a1.25 1.25 0 0 1 2.5 0V5A1.25 1.25 0 0 1 16 5v2a1.25 1.25 0 0 1 2.5 0v8L17 17.5v4M8.5 18H17");
}
</style><path class="nlugwx9vd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:golf-glove"} {...others} />);
}

export default Component;
