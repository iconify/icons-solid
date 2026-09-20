import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gx8g11bpy {
  fill: currentColor;
  d: path("M6.5 16.5h11v-2h-11zM3 19V5h18v14z");
}
</style><path class="gx8g11bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:call-to-action-sharp"} {...others} />);
}

export default Component;
