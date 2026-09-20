import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l817du1oh {
  fill: currentColor;
  d: path("M3 21v-2h2V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v14h2v2zm11.713-8.287Q15 12.425 15 12t-.288-.712T14 11t-.712.288T13 12t.288.713T14 13t.713-.288");
}
</style><path class="l817du1oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:door-front"} {...others} />);
}

export default Component;
