import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kyv1m3q_x {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V3h18v14z");
}
</style><path class="kyv1m3q_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-footer-sharp"} {...others} />);
}

export default Component;
