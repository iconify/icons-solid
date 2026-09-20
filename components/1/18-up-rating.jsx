import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lugw9-1sa {
  fill: currentColor;
  d: path("M8.5 15H10V9H7v1.5h1.5zm4 0H15q.425 0 .713-.288T16 14v-4q0-.425-.288-.712T15 9h-2.5q-.425 0-.712.288T11.5 10v4q0 .425.288.713T12.5 15m.5-1v-1.5h1.5V14zm0-2.5V10h1.5v1.5zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="lugw9-1sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:18-up-rating"} {...others} />);
}

export default Component;
