import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lxfrt_b1f {
  fill: currentColor;
  d: path("M13 22v-4l4-1l-4-1v-4l10 5zm-8-1q-.825 0-1.412-.587T3 19v-3.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V6q0-.825.588-1.412T5 4h4q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h4q.825 0 1.413.588T20 6v7.25l-9-4.5v9.3q-1 .2-1.6.938T8.8 21z");
}
</style><path class="lxfrt_b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:send-time-extension"} {...others} />);
}

export default Component;
