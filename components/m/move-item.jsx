import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fw1dxnbbq {
  fill: currentColor;
  d: path("M20.15 13H8v-2h12.15L18.6 9.45L20 8l4 4l-4 4l-1.4-1.45zM15 9V5H5v14h10v-4h2v4q0 .825-.587 1.413T15 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h10q.825 0 1.413.588T17 5v4z");
}
</style><path class="fw1dxnbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:move-item"} {...others} />);
}

export default Component;
