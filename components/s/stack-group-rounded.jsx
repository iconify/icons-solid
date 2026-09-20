import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.at5k4_bck {
  fill: currentColor;
  d: path("M10 22q-.825 0-1.412-.587T8 20v-4H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v4h4q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z");
}
</style><path class="at5k4_bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stack-group-rounded"} {...others} />);
}

export default Component;
