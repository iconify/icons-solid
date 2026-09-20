import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhf8xkugf {
  fill: currentColor;
  d: path("M12.438 18.563Q12 18.125 12 17.5V8H9.5q-.625 0-1.062-.437T8 6.5t.438-1.062T9.5 5H13q.825 0 1.413.588T15 7v10.5q0 .625-.437 1.063T13.5 19t-1.062-.437");
}
</style><path class="zhf8xkugf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:timer-1-rounded"} {...others} />);
}

export default Component;
