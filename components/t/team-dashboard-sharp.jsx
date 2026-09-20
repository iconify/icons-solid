import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1sem7v0i {
  fill: currentColor;
  d: path("M10.5 20v-7.75H4V20zm1 0H20v-7.75h-8.5zM4 11.25h16V4H4z");
}
</style><path class="s1sem7v0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:team-dashboard-sharp"} {...others} />);
}

export default Component;
