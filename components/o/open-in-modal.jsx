import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tx-bsdb4l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 2.75H6.875q-2.123 0-3.624 1.501T1.75 7.875v8.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-8.25q0-2.123-1.501-3.624T17.125 2.75m-7.5 4.5h4.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375h-4.75q-3.375 0-3.375-3.375v-2.75q0-3.375 3.375-3.375");
}
</style><path class="tx-bsdb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:open-in-modal"} {...others} />);
}

export default Component;
