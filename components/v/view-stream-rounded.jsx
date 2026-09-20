import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kdyz5_b_u {
  fill: currentColor;
  d: path("M5 19q-.825 0-1.412-.587T3 17v-2q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v2q0 .825-.587 1.413T19 19zm0-8q-.825 0-1.412-.587T3 9V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v2q0 .825-.587 1.413T19 11z");
}
</style><path class="kdyz5_b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-stream-rounded"} {...others} />);
}

export default Component;
