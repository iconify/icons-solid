import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vc3j7_2rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h13V15h-13Zm2 15l-2 1.5l2 1.5m-2-1.5h13m-2-1.5l2 1.5l-2 1.5m4.5-16l1.5-2l1.5 2m-1.5-2V15M18 13l1.5 2l1.5-2");
}
</style><path class="vc3j7_2rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dimension-measure"} {...others} />);
}

export default Component;
