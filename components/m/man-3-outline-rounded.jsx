import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbi05ubbj {
  fill: currentColor;
  d: path("M10 21.25v-6H9q-.425 0-.712-.288T8 14.25v-5q0-.825.588-1.412T10 7.25h4q.825 0 1.413.588T16 9.25v5q0 .425-.288.713T15 15.25h-1v6q0 .425-.288.713T13 22.25h-2q-.425 0-.712-.288T10 21.25M11.3 5.8l-.85-.85q-.3-.3-.3-.7t.3-.7l.85-.85q.3-.3.7-.3t.7.3l.85.85q.3.3.3.7t-.3.7l-.85.85q-.3.3-.7.3t-.7-.3");
}
</style><path class="lbi05ubbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:man-3-outline-rounded"} {...others} />);
}

export default Component;
