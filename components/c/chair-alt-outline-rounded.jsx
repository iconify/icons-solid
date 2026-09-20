import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzo72jbvs {
  fill: currentColor;
  d: path("M5 20v-6q0-.825.588-1.412T7 12h1v-2H7q-.825 0-1.412-.587T5 8V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v3q0 .825-.587 1.413T17 10h-1v2h1q.825 0 1.413.588T19 14v6q0 .425-.288.713T18 21t-.712-.288T17 20v-2H7v2q0 .425-.288.713T6 21t-.712-.288T5 20M7 8h10V5H7zm3 4h4v-2h-4zm-3 4h10v-2H7zm0-8V5zm0 8v-2z");
}
</style><path class="mzo72jbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chair-alt-outline-rounded"} {...others} />);
}

export default Component;
