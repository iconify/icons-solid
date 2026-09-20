import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikl58_bwl {
  fill: currentColor;
  d: path("M0 20v-2h4v-1H2V3h20v14h-2v1h4v2z");
}
</style><path class="ikl58_bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:laptop-windows-sharp"} {...others} />);
}

export default Component;
