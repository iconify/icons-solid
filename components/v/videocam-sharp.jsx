import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pvb6_fp2b {
  fill: currentColor;
  d: path("M2 20V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="pvb6_fp2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:videocam-sharp"} {...others} />);
}

export default Component;
