import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kq84sff3v {
  fill: currentColor;
  d: path("M10.95 21L7.4 17.45l1.425-1.4l2.125 2.125l4.225-4.25L16.6 15.35zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm.3 3q-.65 0-1.175-.387T6.5 9.6L6 8H5q-.825 0-1.412-.587T3 6V3h18v3q0 .825-.587 1.413T19 8h-1l-.65 1.7q-.225.575-.725.938T15.5 11zM5 5v1z");
}
</style><path class="kq84sff3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:detector-status-outline"} {...others} />);
}

export default Component;
