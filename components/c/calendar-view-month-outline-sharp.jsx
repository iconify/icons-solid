import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wtp6bltgh {
  fill: currentColor;
  d: path("M4 11.5h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM4 18h4.673v-5.5H4zm5.673 0h4.654v-5.5H9.673zm5.654 0H20v-5.5h-4.673zM3 19V5h18v14z");
}
</style><path class="wtp6bltgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:calendar-view-month-outline-sharp"} {...others} />);
}

export default Component;
