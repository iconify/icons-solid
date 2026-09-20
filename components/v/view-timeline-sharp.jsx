import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l65189boa {
  fill: currentColor;
  d: path("M3 21V3h18v18zm3-4h6v-2H6zm6-8h6V7h-6zm-3 4h6v-2H9z");
}
</style><path class="l65189boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-timeline-sharp"} {...others} />);
}

export default Component;
