import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9-agtbgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21v-4l-4.5-4.5A1.75 1.75 0 0 1 7 10l2 2V3.5h10.5V21Zm2.75-17.5v3m2.5-3v3m2.5-3v3M9 18.25h10.5");
}
</style><path class="c9-agtbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:artist-glove"} {...others} />);
}

export default Component;
