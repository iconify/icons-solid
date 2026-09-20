import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.extt5ccqr {
  fill: currentColor;
  d: path("M4.5 17h2v-4h4v4h2V7h-2v4h-4V7h-2zm11-2h2v-2h2v-2h-2V9h-2v2h-2v2h2zM1 21V3h22v18zm2-2h18V5H3zm0 0V5z");
}
</style><path class="extt5ccqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:h-plus-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
