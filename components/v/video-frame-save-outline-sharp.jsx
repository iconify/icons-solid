import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2ar4ibvn {
  fill: currentColor;
  d: path("M20 10V6h-4V4h6v6zM2 10V4h6v2H4v4zm0 10v-6h2v4h4v2zm7.5-3.5v-9l7 4.5zm5.5 7.475v-2h8v2zM19 21l-4-4l1.4-1.4l1.6 1.55V13h2v4.15l1.6-1.55L23 17z");
}
</style><path class="g2ar4ibvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-frame-save-outline-sharp"} {...others} />);
}

export default Component;
