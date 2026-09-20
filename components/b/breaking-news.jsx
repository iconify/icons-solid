import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3xv_zbxx {
  fill: currentColor;
  d: path("M7.713 16.713Q8 16.425 8 16t-.288-.712T7 15t-.712.288T6 16t.288.713T7 17t.713-.288M6 13h2V7H6zm5 4h7v-2h-7zm0-4h7v-2h-7zm0-4h7V7h-7zM4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21z");
}
</style><path class="b3xv_zbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:breaking-news"} {...others} />);
}

export default Component;
