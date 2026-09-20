import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yc4abebtu {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-8.425l3.3-3.3q.3-.3.7-.3t.7.3l3.3 3.3l3.3-3.3q.3-.3.7-.3t.7.3l.3.3V5H5v6.575zM5 19h14v-6.6l-1-1l-3.3 3.3q-.3.3-.7.3t-.7-.3L10 11.4l-3.3 3.3q-.3.3-.7.3t-.7-.3l-.3-.3zm0 0v-6.6v2V5z");
}
</style><path class="yc4abebtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:broken-image-outline-rounded"} {...others} />);
}

export default Component;
