import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pef6-hbuu {
  fill: currentColor;
  d: path("M3.175 3.175v2.8L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-5.3-5.3H14v2h2v2H8v-2h2v-2H4q-.825 0-1.412-.587T2 16V5q0-.925.588-1.375zM20.7 17.85L5.85 3H20q.825 0 1.413.588T22 5v11q0 .65-.363 1.15t-.937.7");
}
</style><path class="pef6-hbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-access-disabled"} {...others} />);
}

export default Component;
