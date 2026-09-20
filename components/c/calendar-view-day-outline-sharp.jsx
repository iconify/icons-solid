import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aap6mqbnn {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h18v10zm2-2h14V9H5zM3 5V3h18v2zm2 10V9z");
}
</style><path class="aap6mqbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:calendar-view-day-outline-sharp"} {...others} />);
}

export default Component;
