import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pbx79ib5v {
  fill: currentColor;
  d: path("M3 21V8h5V3h13v18zm13-2h3V5h-9v3h6zm-6 0h4v-9h-4zm-5 0h3v-9H5zM16 8v2zm0 0");
}
</style><path class="pbx79ib5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:responsive-layout-outline"} {...others} />);
}

export default Component;
