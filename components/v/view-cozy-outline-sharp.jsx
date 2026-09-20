import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj89sacdj {
  fill: currentColor;
  d: path("M3 10.5V3h7.5v7.5zm2-2h3.5V5H5zM3 21v-7.5h7.5V21zm2-2h3.5v-3.5H5zm8.5-8.5V3H21v7.5zm2-2H19V5h-3.5zm-2 12.5v-7.5H21V21zm2-2H19v-3.5h-3.5zm0-3.5");
}
</style><path class="fj89sacdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-cozy-outline-sharp"} {...others} />);
}

export default Component;
