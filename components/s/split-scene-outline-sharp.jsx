import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7nwiob9s {
  fill: currentColor;
  d: path("M4 19V5h5.116v1H5v12h4.116v1zm7.5 2V3h1v2H20v14h-7.5v2zm1-3H19V6h-6.5zM5 18V6zm14 0V6z");
}
</style><path class="c7nwiob9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-outline-sharp"} {...others} />);
}

export default Component;
