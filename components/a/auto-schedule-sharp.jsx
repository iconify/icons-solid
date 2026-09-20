import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sb2va1b4w {
  fill: currentColor;
  d: path("m12 19l-1.25-2.75L8 15l2.75-1.25L12 11l1.25 2.75L16 15l-2.75 1.25L12 19Zm-9 3V4h3V2h2v2h8V2h2v2h3v18H3Zm2-2h14V10H5v10Z");
}
</style><path class="sb2va1b4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-schedule-sharp"} {...others} />);
}

export default Component;
