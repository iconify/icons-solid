import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvfwbabkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11.25h11.75l-.22 1.74l-.81 6.52l-.22 1.74h-11l-.22-1.74l-.81-6.52l-.22-1.74zM6.75 15h10.5m-8.5-3.75l-2-8m5.25 8v-8.5m3.25 8.5l3-7");
}
</style><path class="cvfwbabkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pen-holder-sharp"} {...others} />);
}

export default Component;
