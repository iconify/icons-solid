import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lotus6bwc {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h14q.825 0 1.413.588T20 5v2h2v2h-2v2h2v2h-2v2h2v2h-2v2q0 .825-.587 1.413T18 21zm0-2h14V5H4zm2-2h5v-4H6zm6-7h4V7h-4zm-6 2h5V7H6zm6 5h4v-6h-4zM4 5v14z");
}
</style><path class="lotus6bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:developer-board-outline"} {...others} />);
}

export default Component;
