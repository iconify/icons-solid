import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gpu5vacax {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-8.45q.45-.275.963-.413T7 12h10q.525 0 1.038.138t.962.412V5H5zM5 19h14v-3q0-.825-.587-1.412T17 14H7q-.825 0-1.412.588T5 16zm0 0h14z");
}
</style><path class="gpu5vacax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-drawer-outline-rounded"} {...others} />);
}

export default Component;
