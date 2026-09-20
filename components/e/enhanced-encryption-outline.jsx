import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3_lm2bol {
  fill: currentColor;
  d: path("M11 19h2v-3h3v-2h-3v-3h-2v3H8v2h3zm-5 3q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zM9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z");
}
</style><path class="g3_lm2bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:enhanced-encryption-outline"} {...others} />);
}

export default Component;
