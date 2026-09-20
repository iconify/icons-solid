import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rik8jgqcq {
  fill: currentColor;
  d: path("M6 21q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm0-2h12V5H6zm5-6.825L9.4 10.6L8 12l4 4l4-4l-1.4-1.425l-1.6 1.6V8h-2zM18 19H6z");
}
</style><path class="rik8jgqcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tilt-arrow-down-outline"} {...others} />);
}

export default Component;
