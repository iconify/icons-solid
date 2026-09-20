import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qf43jb_jq {
  fill: currentColor;
  d: path("M5 19h9V5H5zm-2 2V3h18v18z");
}
</style><path class="qf43jb_jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dock-to-left-sharp"} {...others} />);
}

export default Component;
