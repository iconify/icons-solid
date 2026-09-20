import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxz_g4lxm {
  fill: currentColor;
  d: path("M2 21v-2h20v2zm17-4V3h1.5v14zM4 17L9.25 3h2.5L17 17h-2.4l-1.25-3.6H7.7L6.4 17zm4.4-5.6h4.2l-2.05-5.8h-.1z");
}
</style><path class="gxz_g4lxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-fields-alt"} {...others} />);
}

export default Component;
