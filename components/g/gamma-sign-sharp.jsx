import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zp__pnhot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.25h3.182l1.818 4L12 13.5c.75 1.75 1.75 3.5 1.75 5.25v2h-3.5v-2c0-1.75 1-3.5 1.75-5.25l7.75-8");
}
</style><path class="zp__pnhot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gamma-sign-sharp"} {...others} />);
}

export default Component;
