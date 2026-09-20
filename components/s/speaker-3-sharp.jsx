import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.alppr7vxf {
  fill: currentColor;
  d: path("M8.692 21v-1H4.981V3H19v17h-3.73v1z");
}
</style><path class="alppr7vxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:speaker-3-sharp"} {...others} />);
}

export default Component;
