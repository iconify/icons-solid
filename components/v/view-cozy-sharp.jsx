import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ew9tmov3s {
  fill: currentColor;
  d: path("M3 10.5V3h7.5v7.5zM3 21v-7.5h7.5V21zm10.5-10.5V3H21v7.5zm0 10.5v-7.5H21V21z");
}
</style><path class="ew9tmov3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-cozy-sharp"} {...others} />);
}

export default Component;
