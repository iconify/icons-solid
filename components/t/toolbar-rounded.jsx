import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v6dq52byi {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19v-9h18v9q0 .825-.587 1.413T19 21zM3 8V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v3z");
}
</style><path class="v6dq52byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:toolbar-rounded"} {...others} />);
}

export default Component;
