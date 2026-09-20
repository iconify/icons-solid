import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-7ekin3q {
  fill: currentColor;
  d: path("M5 23q-.825 0-1.412-.587T3 21v-1h18v1q0 .825-.587 1.413T19 23zm-1-5q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h16q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zM3 4V3q0-.825.588-1.412T5 1h14q.825 0 1.413.588T21 3v1zm7 11l5-3l-5-3z");
}
</style><path class="f-7ekin3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-template"} {...others} />);
}

export default Component;
