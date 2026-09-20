import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pbxu_vb6p {
  fill: currentColor;
  d: path("M10 21v-8.25H3V21zm2 0h9v-8.25h-9zM3 10.75h18V3H3z");
}
</style><path class="pbxu_vb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:team-dashboard-sharp"} {...others} />);
}

export default Component;
