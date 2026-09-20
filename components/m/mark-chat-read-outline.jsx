import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrmsrzboe {
  fill: currentColor;
  d: path("m17.35 20l-3.525-3.55l1.4-1.4l2.125 2.125l4.25-4.25L23 14.35zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v7h-2V4H4v13.125L5.15 16H12v2H6zm2-6V4z");
}
</style><path class="qrmsrzboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-chat-read-outline"} {...others} />);
}

export default Component;
