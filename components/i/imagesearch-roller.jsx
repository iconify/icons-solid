import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wz79wr6hj {
  fill: currentColor;
  d: path("M15 23h-4q-.425 0-.712-.288T10 22v-6q0-.425.288-.712T11 15h1v-3H4q-.825 0-1.412-.587T2 10V6q0-.825.588-1.412T4 4h2V3q0-.425.288-.712T7 2h12q.425 0 .713.288T20 3v4q0 .425-.288.713T19 8H7q-.425 0-.712-.288T6 7V6H4v4h8q.825 0 1.413.588T14 12v3h1q.425 0 .713.288T16 16v6q0 .425-.288.713T15 23");
}
</style><path class="wz79wr6hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:imagesearch-roller"} {...others} />);
}

export default Component;
