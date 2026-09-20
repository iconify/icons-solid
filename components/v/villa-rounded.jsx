import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjl2rzbvr {
  fill: currentColor;
  d: path("M9 21v-7q0-.825.588-1.412T11 12h6q0-.825.588-1.412T19 10t1.413.588T21 12v9h-5v-4q0-.425-.288-.712T15 16t-.712.288T14 17v4zm-6 0V9.375q0-.625.35-1.137t.925-.738L14.65 3.525q.5-.2.925.1T16 4.45V10h-6q-1.25 0-2.125.875T7 13v8z");
}
</style><path class="bjl2rzbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:villa-rounded"} {...others} />);
}

export default Component;
