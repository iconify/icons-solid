import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dc-u1xbrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h15.725v15.725H5.5M42.5 5.5v15.725H26.775V5.5m-5.55 37V26.775H5.5V42.5m37-15.725H26.775V42.5H42.5");
}

.ni9o0km3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5a7.863 7.863 0 0 1 0 15.725zm37 0a7.863 7.863 0 0 1-15.725 0zm-37 37a7.863 7.863 0 0 1 15.725 0zm37 0a7.863 7.863 0 0 1 0-15.725z");
}
</style><path class="dc-u1xbrz"/><path class="ni9o0km3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dm-unipd"} {...others} />);
}

export default Component;
