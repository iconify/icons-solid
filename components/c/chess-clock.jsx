import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9wv3sb3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h8v10h-8Zm11 0h8v10h-8ZM3.75 5h5.5v3h-5.5Zm11 0h5.5v3h-5.5ZM6.5 13.5v-2.75m0 2.75l1.25 1m9.75-1v-2.75m0 2.75l-1.25 1");
}
</style><path class="u9wv3sb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chess-clock"} {...others} />);
}

export default Component;
