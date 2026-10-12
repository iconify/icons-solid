import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nz5t59bzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.75v-7m0 3.75V9.2l-2.25-.45m2.25.5V6.667l2.5-.417m4.5 8.5v-7m0 3.75V9.2l-2.25-.45m2.25.5V6.667l2.5-.417m4.5 8.5v-7m0 3.75V9.2l-2.25-.45m2.25.5V6.7l2.25-.45M2.75 18c1.5 0 1.5-1 3.1-1s1.5 1 3.1 1s1.5-1 3.05-1s1.5 1 3.1 1s1.5-1 3.05-1s1.5 1 3.1 1m-18.5 3.25c1.5 0 1.5-1 3.1-1s1.5 1 3.1 1s1.5-1 3.05-1s1.5 1 3.1 1s1.5-1 3.05-1s1.5 1 3.1 1");
}
</style><path class="nz5t59bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rice-paddy-sharp"} {...others} />);
}

export default Component;
