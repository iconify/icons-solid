import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ygpqk7ong {
  fill: currentColor;
  d: path("M1.616 14.5v-1H5v1zM11.5 7V2.616h1V7zm5.766 2.385l-.689-.708l2.44-2.402l.695.708zM19 14.5v-1h3.385v1zm.833 6.76L15.573 17H7.5v-2h6.073L2.74 4.167l.714-.713l17.092 17.092z");
}
</style><path class="ygpqk7ong"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:backlight-high-off-outline"} {...others} />);
}

export default Component;
