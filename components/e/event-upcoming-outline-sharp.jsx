import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f66aivbcm {
  fill: currentColor;
  d: path("M15 22v-2h4V10H5v4H3V4h3V2h2v2h8V2h2v2h3v18zm-7 2l-1.4-1.4L9.175 20H1v-2h8.175L6.6 15.4L8 14l5 5zM5 8h14V6H5zm0 0V6z");
}
</style><path class="f66aivbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:event-upcoming-outline-sharp"} {...others} />);
}

export default Component;
