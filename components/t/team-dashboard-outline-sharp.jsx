import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zzx2q-k9k {
  fill: currentColor;
  d: path("M4 20V4h16v16zm6.5-1v-6.5H5V19zm1 0H19v-6.5h-7.5zM5 11.5h14V5H5z");
}
</style><path class="zzx2q-k9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:team-dashboard-outline-sharp"} {...others} />);
}

export default Component;
