import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x75fffbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.475 5.5H9.5c-2.216 0-4 1.785-4 4v27.976l15.988-15.988l5.024 5.024L42.5 10.524V38.5c0 2.216-1.784 4-4 4H10.525");
}
</style><path class="x75fffbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:facebook-analytics"} {...others} />);
}

export default Component;
