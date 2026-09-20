import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dehnpbebl {
  fill: currentColor;
  d: path("M6 21v-2l1-1H2V3h10v2H4v11h16v-3h2v5h-5l1 1v2zm9-6l-5-5l1.4-1.4l2.6 2.575V3h2v8.175L18.6 8.6L20 10z");
}
</style><path class="dehnpbebl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:browser-updated-outline-sharp"} {...others} />);
}

export default Component;
