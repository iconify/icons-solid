import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.utchwybyo {
  fill: currentColor;
  d: path("M7 21q-.425 0-.712-.288T6 20t.288-.712T7 19h4v-3H4q-.825 0-1.412-.587T2 14V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-7v3h4q.425 0 .713.288T18 20t-.288.713T17 21zm-3-7h16V5H4z");
}
</style><path class="utchwybyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:jamboard-kiosk-rounded"} {...others} />);
}

export default Component;
