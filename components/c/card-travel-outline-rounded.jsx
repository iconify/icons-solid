import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfqtcxb5k {
  fill: currentColor;
  d: path("M4 17v2h16v-2zM7 6V4q0-.825.588-1.412T9 2h6q.825 0 1.413.588T17 4v2h3q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21H4q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6zm-3 8h16V8h-3v1q0 .425-.288.713T16 10t-.712-.288T15 9V8H9v1q0 .425-.288.713T8 10t-.712-.288T7 9V8H4zm5-8h6V4H9zM4 19V8v2v-2v2v-2z");
}
</style><path class="cfqtcxb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-travel-outline-rounded"} {...others} />);
}

export default Component;
