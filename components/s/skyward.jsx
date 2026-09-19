import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l7rfnlbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.713 32c5.103-6.418 11.598-11.407 24.135-11.407H43.5M9.97 32c6.035-7.005 14.224-13.763 29.174-13.763H43.5M4.5 32c7.392-8.075 16.732-16 33.976-16H43.5");
}
</style><path class="l7rfnlbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:skyward"} {...others} />);
}

export default Component;
