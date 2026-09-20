import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s_vkhfbdv {
  fill: currentColor;
  d: path("M6.02 20V4h12.276l3.404 8.5h-3.488V20zm3.592-8.5h10.6L17.619 5H7.02zM7.018 19h10.193v-6.5H8.935L7.018 7.721zm6.597-10.75");
}
</style><path class="s_vkhfbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:devices-fold-2-outline-sharp"} {...others} />);
}

export default Component;
