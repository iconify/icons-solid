import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.famfi94ub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13v-1.5a7.75 7.75 0 0 1 15.5 0V13M2.5 13h3.75v7.5H2.5Zm15.25 0h3.75v7.5h-3.75ZM9 17q1.5-2.5 3 0t3 0m-5.5 3l5-6");
}
</style><path class="famfi94ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:headphones-noise-cancelling"} {...others} />);
}

export default Component;
