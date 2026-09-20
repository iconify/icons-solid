import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vgaa_3bxl {
  fill: currentColor;
  d: path("M6 12.5v-1h12v1z");
}
</style><path class="vgaa_3bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:remove-outline-sharp"} {...others} />);
}

export default Component;
