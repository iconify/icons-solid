import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z7o_l_b5v {
  fill: currentColor;
  d: path("M10.616 15.635v-7.25L7.135 12zM13 20h1V4h-1z");
}
</style><path class="z7o_l_b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-menu-close"} {...others} />);
}

export default Component;
