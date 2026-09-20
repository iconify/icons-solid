import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lojp-cbdw {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h6.5V5H5zm7.5 0H19v-7h-6.5zm0-8H19V5h-6.5z");
}
</style><path class="lojp-cbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:space-dashboard-outline-sharp"} {...others} />);
}

export default Component;
