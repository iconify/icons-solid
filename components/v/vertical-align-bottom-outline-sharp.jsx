import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccm26ub5x {
  fill: currentColor;
  d: path("M4 21v-2h16v2zm8-4l-5-5l1.4-1.4l2.6 2.6V3h2v10.2l2.6-2.6L17 12z");
}
</style><path class="ccm26ub5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vertical-align-bottom-outline-sharp"} {...others} />);
}

export default Component;
