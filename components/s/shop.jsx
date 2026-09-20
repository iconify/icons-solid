import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qyw3ltb3v {
  fill: currentColor;
  d: path("m9.5 18l7-4.5l-7-4.5zM4 21q-.825 0-1.412-.587T2 19V6h6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h6v13q0 .825-.587 1.413T20 21zm6-15h4V4h-4z");
}
</style><path class="qyw3ltb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shop"} {...others} />);
}

export default Component;
