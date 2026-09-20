import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ps9kitbnz {
  fill: currentColor;
  d: path("M2 19V5q0-.825.588-1.412T4 3h6q.825 0 1.413.588T12 5v2h8q.825 0 1.413.588T22 9v10q0 .825-.587 1.413T20 21H4q-.825 0-1.412-.587T2 19m2 0h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 12h2v-2H8zm0-4h2v-2H8zm0-4h2V9H8zm0-4h2V5H8zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2zm4-6v-2h2v2zm0 4v-2h2v2z");
}
</style><path class="ps9kitbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:domain-rounded"} {...others} />);
}

export default Component;
