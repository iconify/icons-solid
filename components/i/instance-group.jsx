import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v58s1ib0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 3.5h8.5V12h-8.5ZM3.5 12H12v8.5H3.5Zm8.5 0h8.5v8.5H12ZM7.75 6.25h8.5M3.5 14.75H12m0 0h8.5");
}
</style><path class="v58s1ib0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:instance-group"} {...others} />);
}

export default Component;
