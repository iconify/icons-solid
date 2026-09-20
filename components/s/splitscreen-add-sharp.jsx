import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7frqob5h {
  fill: currentColor;
  d: path("M3 11V3h18v8zm0 10v-8h18v2.1q-.275-.05-.513-.075T20 15q-2.125 0-3.562 1.475T15 20q0 .275.025.525T15.1 21zm16 2v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="q7frqob5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-add-sharp"} {...others} />);
}

export default Component;
