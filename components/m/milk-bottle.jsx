import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjuii0brc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h4v3c0 1.5 3 2 3 5V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7.5c0-3 3-3.5 3-5ZM7 14h10");
}
</style><path class="gjuii0brc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:milk-bottle"} {...others} />);
}

export default Component;
