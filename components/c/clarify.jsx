import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zwrpkybme {
  fill: currentColor;
  d: path("M6 17h7v-2H6zm10 0h2V7h-2zM6 13h7v-2H6zm0-4h7V7H6zM4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21z");
}
</style><path class="zwrpkybme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:clarify"} {...others} />);
}

export default Component;
