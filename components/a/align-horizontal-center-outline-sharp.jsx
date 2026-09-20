import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7hptl2mh {
  fill: currentColor;
  d: path("M11.5 21v-4.692H7v-2.039h4.5V9.731H4V7.692h7.5V3h1v4.692H20v2.039h-7.5v4.538H17v2.039h-4.5V21z");
}
</style><path class="k7hptl2mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-horizontal-center-outline-sharp"} {...others} />);
}

export default Component;
