import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dg9ih6bfc {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h10.1q-.1.5-.1 1t.1 1H4l8 5l3.65-2.275q.35.325.763.563t.862.412L12 13L4 8v10h16V9.9q.575-.125 1.075-.35T22 9v9q0 .825-.587 1.413T20 20zM4 6v12zm12.875 1.125Q16 6.25 16 5t.875-2.125T19 2t2.125.875T22 5t-.875 2.125T19 8t-2.125-.875");
}
</style><path class="dg9ih6bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-email-unread-outline"} {...others} />);
}

export default Component;
