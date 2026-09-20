import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rfrqrxbut {
  fill: currentColor;
  d: path("M7 22q-.825 0-1.412-.587T5 20v-2q0-.825.588-1.412T7 16v-5q-.825 0-1.412-.587T5 9V7q0-.825.588-1.412T7 5h3V4H9V2h6v2h-1v1h3q.825 0 1.413.588T19 7v2q0 .825-.587 1.413T17 11v5q.825 0 1.413.588T19 18v2q0 .825-.587 1.413T17 22z");
}
</style><path class="rfrqrxbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:water-bottle-large"} {...others} />);
}

export default Component;
