import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yl4l7_bjt {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm7.5-3.75v-8.5H20v8.5zM4 5V4h16v1zm0 11.25v-1h4.73v1z");
}
</style><path class="yl4l7_bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-image-inline-right"} {...others} />);
}

export default Component;
