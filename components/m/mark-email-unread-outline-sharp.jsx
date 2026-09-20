import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nam4tib5c {
  fill: currentColor;
  d: path("M2 20V4h12.1q-.1.5-.1 1t.1 1H4l8 5l3.65-2.275q.35.325.763.563t.862.412L12 13L4 8v10h16V9.9q.575-.125 1.075-.35T22 9v11zM4 6v12zm12.875 1.125Q16 6.25 16 5t.875-2.125T19 2t2.125.875T22 5t-.875 2.125T19 8t-2.125-.875");
}
</style><path class="nam4tib5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-email-unread-outline-sharp"} {...others} />);
}

export default Component;
