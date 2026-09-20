import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_s0d_m8a {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-4h16V6H4z");
}
</style><path class="r_s0d_m8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-label-outline-sharp"} {...others} />);
}

export default Component;
