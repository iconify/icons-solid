import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-xjjz1ei {
  fill: currentColor;
  d: path("M6 21q-.825 0-1.412-.587T4 19v-4h2v4h12v-4h2v4q0 .825-.587 1.413T18 21zm-4-8v-2h2V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v6h2v2zm4-2h12V5H6zm12 8H6zm0-14H6z");
}
</style><path class="b-xjjz1ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-2-outline"} {...others} />);
}

export default Component;
