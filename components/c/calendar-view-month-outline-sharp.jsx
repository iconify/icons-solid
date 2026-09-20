import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-bzoyiqr {
  fill: currentColor;
  d: path("M4 11h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zM4 18h4v-5H4zm6 0h4v-5h-4zm6 0h4v-5h-4zM2 20V4h20v16z");
}
</style><path class="f-bzoyiqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:calendar-view-month-outline-sharp"} {...others} />);
}

export default Component;
