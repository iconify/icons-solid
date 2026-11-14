import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bebb7kbpa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 1.75H6.875q-2.123 0-3.624 1.501T1.75 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T17.125 1.75m-1.75 7.5q3.375 0 3.375 3.375v3.25q0 3.375-3.375 3.375h-6.75q-3.375 0-3.375-3.375v-3.25q0-3.375 3.375-3.375z");
}
</style><path class="bebb7kbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:iframe"} {...others} />);
}

export default Component;
