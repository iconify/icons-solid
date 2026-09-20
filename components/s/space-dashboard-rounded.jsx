import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lt3mjub1q {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19v-5q0-.825.588-1.412T15 12h4q.825 0 1.413.588T21 14v5q0 .825-.587 1.413T19 21zm0-11q-.825 0-1.412-.587T13 8V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v3q0 .825-.587 1.413T19 10z");
}
</style><path class="lt3mjub1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:space-dashboard-rounded"} {...others} />);
}

export default Component;
