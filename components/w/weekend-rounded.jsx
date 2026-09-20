import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2_bdp2zi {
  fill: currentColor;
  d: path("M4 20q-1.25 0-2.125-.875T1 17v-5q0-.825.588-1.412T3 10t1.413.588T5 12v4h14v-4q0-.825.588-1.412T21 10t1.413.588T23 12v5q0 1.25-.875 2.125T20 20zm3-6v-2q0-1.325-.862-2.325T4 8.3V7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v1.3q-1.325.275-2.162 1.313T17 12v2z");
}
</style><path class="g2_bdp2zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:weekend-rounded"} {...others} />);
}

export default Component;
