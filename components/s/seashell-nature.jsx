import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0qhycbkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 20.5l-6-9.5C3 6.5 7 3.5 12 3.5s9 3 8.5 7.5l-6 9.5Zm2.5 0v-17m0 17l-6.25-15m6.25 15l6.25-15");
}
</style><path class="p0qhycbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:seashell-nature"} {...others} />);
}

export default Component;
