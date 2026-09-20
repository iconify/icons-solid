import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xidp2abfi {
  fill: currentColor;
  d: path("M4 16.25v-8.5h8.5v8.5zm1-1h6.5v-6.5H5zM4 5V4h16v1zm10.885 3.75v-1H20v1zm0 3.75v-1H20v1zm0 3.75v-1H20v1zM4 20v-1h16v1zm4.25-8");
}
</style><path class="xidp2abfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-image-left-outline-sharp"} {...others} />);
}

export default Component;
