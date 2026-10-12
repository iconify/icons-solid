import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ztllc1aon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.31 7.75l3.13 2.75q.56.5.99-.12l3.14-4.51q.43-.62.86 0l3.14 4.51q.43.62.99.12l3.13-2.75q.56-.5.45.24l-1.28 8.52q-.11.74-.86.74H6q-.75 0-.86-.74L3.86 7.99q-.11-.74.45-.24m1.44 12.5h12.5");
}
</style><path class="ztllc1aon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crown"} {...others} />);
}

export default Component;
