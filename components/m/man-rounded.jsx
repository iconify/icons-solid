import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbp2_pb7k {
  fill: currentColor;
  d: path("M10 21v-6H9q-.425 0-.712-.288T8 14V9q0-.825.588-1.412T10 7h4q.825 0 1.413.588T16 9v5q0 .425-.288.713T15 15h-1v6q0 .425-.288.713T13 22h-2q-.425 0-.712-.288T10 21m2-15q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6");
}
</style><path class="bbp2_pb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:man-rounded"} {...others} />);
}

export default Component;
