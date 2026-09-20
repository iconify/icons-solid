import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zbe-q9c-w {
  fill: currentColor;
  d: path("M2 15V9q0-.825.588-1.412T4 7t1.413.588T6 9v6q0 .825-.587 1.413T4 17t-1.412-.587T2 15m7 4q-.825 0-1.412-.587T7 17V7q0-.825.588-1.412T9 5h6q.825 0 1.413.588T17 7v10q0 .825-.587 1.413T15 19zm9-4V9q0-.825.588-1.412T20 7t1.413.588T22 9v6q0 .825-.587 1.413T20 17t-1.412-.587T18 15");
}
</style><path class="zbe-q9c-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-carousel-rounded"} {...others} />);
}

export default Component;
