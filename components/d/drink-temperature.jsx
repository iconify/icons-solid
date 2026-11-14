import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lf3bsuq5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.429 20H5L4 3h15l-.452 7.687M4.25 7h14.5M17 18v-3.25a1.25 1.25 0 0 1 2.5 0V18a2 2 0 1 1-2.5 0Z");
}
</style><path class="lf3bsuq5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drink-temperature"} {...others} />);
}

export default Component;
