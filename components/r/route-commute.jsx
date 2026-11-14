import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxky03xqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 15.5l4-3.5l4 3.5V21h-8ZM13 5h8.5v6.5H13Zm2.5 0V3H19v2M6.5 12v-2a2 2 0 0 1 2-2H13");
}
</style><path class="mxky03xqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:route-commute"} {...others} />);
}

export default Component;
