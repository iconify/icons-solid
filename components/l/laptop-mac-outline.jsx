import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kcsnh2byr {
  fill: currentColor;
  d: path("M2 20q-.825 0-1.412-.587T0 18h4q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18h4q0 .825-.587 1.413T22 20zm10.713-1.287Q13 18.425 13 18t-.288-.712T12 17t-.712.288T11 18t.288.713T12 19t.713-.288M4 16h16V5H4zm0 0V5z");
}
</style><path class="kcsnh2byr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:laptop-mac-outline"} {...others} />);
}

export default Component;
