import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.of5z3xbyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 15.25h17.5v3.5H3.25zm8.75-1V6.5l.5.87l4 7.01l.5.87h-5zM6.11 12.5l-1.81-.84m3.18-1.09L6.1 9.14m3.36.13l-.78-1.84");
}
</style><path class="of5z3xbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sundial-sharp"} {...others} />);
}

export default Component;
