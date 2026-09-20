import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pg8iwsk9v {
  fill: currentColor;
  d: path("M8 21v-1l2-2H4q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18h-6l2 2v1zm-4-8h16V5H4zm0 0V5z");
}
</style><path class="pg8iwsk9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-mac-outline"} {...others} />);
}

export default Component;
