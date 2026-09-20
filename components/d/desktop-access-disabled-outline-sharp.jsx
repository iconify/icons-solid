import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s05gjukwp {
  fill: currentColor;
  d: path("M2 18V3.175h1.175L5 5H4v11h9.2L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-5.3-5.3H14v2h2v2H8v-2h2v-2zm18.7-.15L18.85 16H20V5H7.85l-2-2H22v14.85zm-7.35-7.35");
}
</style><path class="s05gjukwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-access-disabled-outline-sharp"} {...others} />);
}

export default Component;
