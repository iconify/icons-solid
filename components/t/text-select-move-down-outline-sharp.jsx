import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uw-unsbig {
  fill: currentColor;
  d: path("M3 5V3h18v2zm9 12l-4-4l1.4-1.4l1.6 1.575V7h2v6.175l1.6-1.575L16 13zm-9 4v-2h18v2z");
}
</style><path class="uw-unsbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-select-move-down-outline-sharp"} {...others} />);
}

export default Component;
