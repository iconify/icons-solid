import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hmyxx1_md {
  fill: currentColor;
  d: path("M8.77 17V4h6.46v13zm0 2.385v-1h6.46v1z");
}
</style><path class="hmyxx1_md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:general-device-sharp"} {...others} />);
}

export default Component;
