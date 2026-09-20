import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htek8ib0l {
  fill: currentColor;
  d: path("M12 22.75q-.725 0-1.237-.513T10.25 21H3q-.425 0-.712-.288T2 20t.288-.712T3 19h1V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21h-7.25q0 .725-.513 1.238T12 22.75M6 19h5v-2H6zm7 0h5v-2h-5z");
}
</style><path class="htek8ib0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:roller-shades-closed-rounded"} {...others} />);
}

export default Component;
