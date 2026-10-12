import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipc5mmbvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 20.25h-7v-15h16.5v5.5M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5M17.25 14A3.25 3.25 0 1 1 14 17.25m-1.25 1.25L14 17.25l1.25 1.25");
}
</style><path class="ipc5mmbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:subscription-sharp"} {...others} />);
}

export default Component;
