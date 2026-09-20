import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax188ubua {
  fill: currentColor;
  d: path("M8.288 12.713Q8 12.425 8 12t.288-.712T9 11t.713.288T10 12t-.288.713T9 13t-.712-.288m6 0Q14 12.426 14 12t.288-.712T15 11t.713.288T16 12t-.288.713T15 13t-.712-.288M3 21v-2h1V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1v2zm3-2h5V5H6zm7 0h5V5h-5zm-1-8");
}
</style><path class="ax188ubua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:door-sliding-outline"} {...others} />);
}

export default Component;
