import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yzt9ch-wm {
  fill: currentColor;
  d: path("M5 5V4h14v1z");
}
</style><path class="yzt9ch-wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:maximize-sharp"} {...others} />);
}

export default Component;
