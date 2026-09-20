import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rr0u9ac-d {
  fill: currentColor;
  d: path("M3 21v-5h2v3h14V7H5v3H3V3h18v18zm8.5-3.5l-1.4-1.4l2.075-2.1H3v-2h9.175L10.1 9.9l1.4-1.4L16 13z");
}
</style><path class="rr0u9ac-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-move-outline-sharp"} {...others} />);
}

export default Component;
