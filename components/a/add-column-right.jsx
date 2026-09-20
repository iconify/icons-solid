import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar31vwbhe {
  fill: currentColor;
  d: path("M2 21V3h8v18zm10 0V3h8v4.1q-.25-.05-.488-.075T19 7q-2.075 0-3.537 1.45T14 12t1.463 3.55T19 17q.275 0 .513-.025T20 16.9V21zm6-6v-2h-2v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="ar31vwbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-column-right"} {...others} />);
}

export default Component;
