import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmzz7obqv {
  fill: currentColor;
  d: path("M6 14h8v-2H6zm0-3h12V9H6zm0-3h12v-.1q-.925-.2-1.687-.687T15 6H6zM2 22V2h12.1q-.1.5-.1 1t.1 1H4v13.125L5.15 16H20V7.9q.575-.125 1.075-.337T22 7v11H6zM4 4v12zm12.875 1.125Q16 4.25 16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6t-2.125-.875");
}
</style><path class="rmzz7obqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-unread-chat-alt-outline-sharp"} {...others} />);
}

export default Component;
