import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v123zgddh {
  fill: currentColor;
  d: path("M6.539 16.5h4.923v-1H6.539zm6-8h4.923v-1h-4.923zm-3 4h4.923v-1H9.539zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="v123zgddh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-timeline-outline-sharp"} {...others} />);
}

export default Component;
