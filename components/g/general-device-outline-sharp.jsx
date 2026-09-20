import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cr205w_yt {
  fill: currentColor;
  d: path("M8 18V3h8v15zm2-2h4V5h-4zm-2 5v-2h8v2zm2-5h4z");
}
</style><path class="cr205w_yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:general-device-outline-sharp"} {...others} />);
}

export default Component;
