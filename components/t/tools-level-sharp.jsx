import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kzl9z4bsq {
  fill: currentColor;
  d: path("M4 17q-.825 0-1.412-.587T2 15V9q0-.825.588-1.412T4 7h16q.825 0 1.413.588T22 9v6q0 .825-.587 1.413T20 17zm5.5-5H11V9H9.5q-.6 0-1.05.45T8 10.5t.45 1.05T9.5 12m3.5 0h1.5q.6 0 1.05-.45T16 10.5t-.45-1.05T14.5 9H13z");
}
</style><path class="kzl9z4bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tools-level-sharp"} {...others} />);
}

export default Component;
