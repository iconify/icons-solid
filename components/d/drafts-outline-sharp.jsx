import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gy3dtwpzr {
  fill: currentColor;
  d: path("m12 2.192l9 5.34V20H3V7.533zm0 10.458L19.8 8L12 3.35L4.2 8zm0 1.158L4 9.046V19h16V9.046zM12 19h8H4z");
}
</style><path class="gy3dtwpzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:drafts-outline-sharp"} {...others} />);
}

export default Component;
