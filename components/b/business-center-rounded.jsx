import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdq9ap_pg {
  fill: currentColor;
  d: path("M11 15v-2h2v2zm-1-9h4V4h-4zM4 21q-.825 0-1.412-.587T2 19v-4h7v1q0 .425.288.713T10 17h4q.425 0 .713-.288T15 16v-1h7v4q0 .825-.587 1.413T20 21zm-2-8V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v5h-7v-1q0-.425-.288-.712T14 11h-4q-.425 0-.712.288T9 12v1z");
}
</style><path class="fdq9ap_pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:business-center-rounded"} {...others} />);
}

export default Component;
