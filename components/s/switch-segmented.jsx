import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rs1m195ms {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 5.75H6.875q-2.123 0-3.624 1.501T1.75 10.875v2.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-2.25q0-2.123-1.501-3.624T17.125 5.75");
}
</style><path class="rs1m195ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:switch-segmented"} {...others} />);
}

export default Component;
