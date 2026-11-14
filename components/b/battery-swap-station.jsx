import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x1kidvgah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h11v6h-11Zm13 2v2m-6 8h10v6h-10Zm12 2v2m-2-15.5V11m-2-2l2 2l2-2m-17 11.5V13m-2 2l2-2l2 2");
}
</style><path class="x1kidvgah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:battery-swap-station"} {...others} />);
}

export default Component;
