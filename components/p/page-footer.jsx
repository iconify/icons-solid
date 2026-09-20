import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kgdv3cfbu {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm2-4q-.825 0-1.412-.587T3 15V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v10q0 .825-.587 1.413T19 17z");
}
</style><path class="kgdv3cfbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-footer"} {...others} />);
}

export default Component;
