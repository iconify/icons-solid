import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.owfyyhbjs {
  fill: currentColor;
  d: path("M5 17v-4q0-.825.588-1.412T7 11h2V9H5V7h4q.825 0 1.413.588T11 9v2q0 .825-.587 1.413T9 13H7v2h4v2zm7 0l3-5l-3-5h2l2 3.325L18 7h2l-3 5l3 5h-2l-2-3.325L14 17z");
}
</style><path class="owfyyhbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-2x-outline"} {...others} />);
}

export default Component;
