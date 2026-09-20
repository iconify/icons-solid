import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ul0g_5bwa {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V6h2v14h14v2zm4-4q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm5-7l2.5-1.5L18 11V4h-5z");
}
</style><path class="ul0g_5bwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:collections-bookmark"} {...others} />);
}

export default Component;
