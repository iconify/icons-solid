import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3dhccbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 9.25h17.5v3H3.25zm5 3h7.5l-.85 6.9l-.14 1.855L12.9 21h-1.8l-1.86.005l-.14-1.855Zm.25-5L7.375 6.125L8.5 5l1.125-1.125L8.5 2.75m3.5 4.5l-1.125-1.125L12 5l1.125-1.125L12 2.75m3.5 4.5l-1.125-1.125L15.5 5l1.125-1.125L15.5 2.75");
}
</style><path class="g3dhccbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nebulizer-sharp"} {...others} />);
}

export default Component;
