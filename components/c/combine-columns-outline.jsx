import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gvqno2bta {
  fill: currentColor;
  d: path("M11 15v-2H9v-2h2V9h2v2h2v2h-2v2zm-6 6q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v2H9V5H5v14h4v-2h2v2q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19v-2h2v2h4V5h-4v2h-2V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="gvqno2bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:combine-columns-outline"} {...others} />);
}

export default Component;
