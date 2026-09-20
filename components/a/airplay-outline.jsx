import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhuz_1bpi {
  fill: currentColor;
  d: path("m6 21l6-6l6 6zm-4-4V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-3v-2h3V5H4v12h3v2H4q-.825 0-1.412-.587T2 17m10-5");
}
</style><path class="lhuz_1bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airplay-outline"} {...others} />);
}

export default Component;
