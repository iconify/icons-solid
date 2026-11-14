import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-wsqbc7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l2 2.75l3.25-1v3.5l3.25 1l-2 2.75l2 2.75l-3.25 1v3.5l-3.25-1L12 21l-2-2.75l-3.25 1v-3.5l-3.25-1l2-2.75l-2-2.75l3.25-1v-3.5l3.25 1Zm-2.5 9h.01m4.99 0h.01");
}
</style><path class="i-wsqbc7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dust-bunny"} {...others} />);
}

export default Component;
