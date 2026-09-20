import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agf1soe-i {
  fill: currentColor;
  d: path("M11 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6zm2-10V3h6q.825 0 1.413.588T21 5v6zm0 10v-8h8v6q0 .825-.587 1.413T19 21z");
}
</style><path class="agf1soe-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-awesome-mosaic-rounded"} {...others} />);
}

export default Component;
