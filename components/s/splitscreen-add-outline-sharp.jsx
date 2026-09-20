import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zttr7odai {
  fill: currentColor;
  d: path("M5 19v-4.615v.042v-.042zm-1 1v-6.615h16v1H5V19h9.385v1zm0-9.365V4h16v6.635zm1-1h14V5H5zm0 0V5zM19 20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23h-1z");
}
</style><path class="zttr7odai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-add-outline-sharp"} {...others} />);
}

export default Component;
