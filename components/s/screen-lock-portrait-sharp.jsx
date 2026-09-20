import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_28vsb1k {
  fill: currentColor;
  d: path("M9 16v-5h1v-1q0-.825.588-1.412T12 8t1.413.588T14 10v1h1v5zm2-5h2v-1q0-.425-.288-.712T12 9t-.712.288T11 10zM5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="l_28vsb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screen-lock-portrait-sharp"} {...others} />);
}

export default Component;
