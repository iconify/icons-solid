import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efy7r9bys {
  fill: currentColor;
  d: path("M6 21q-.425 0-.712-.288T5 20v-1H3q-.825 0-1.412-.587T1 17V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v11q0 .825-.587 1.413T21 19h-2v1q0 .425-.288.713T18 21zm-3-4h18V6H3zm2-2h14l-4.5-6l-3.5 4.5l-2.5-3zm-2 2V6z");
}
</style><path class="efy7r9bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-frame-outline"} {...others} />);
}

export default Component;
