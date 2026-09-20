import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xkgxd-bct {
  fill: currentColor;
  d: path("M18 15.15V9h-5v1.15l1.5 1.5V10.5h2v3.15zM6 15h1.5v-2h2v2H11v-4L9.5 9.5v2h-2V9H6zm16 4.15L6.85 4H22zM2 20V4h2l11 11h-2.8L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-2.65-2.6z");
}
</style><path class="xkgxd-bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:high-quality-off-sharp"} {...others} />);
}

export default Component;
