import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zo8djbh0d {
  fill: currentColor;
  d: path("M3 5V3h18v2zm8 12V7h10v10zm2-2h6V9h-6zM3 21v-2h18v2zm13-9");
}
</style><path class="zo8djbh0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-break-right-outline"} {...others} />);
}

export default Component;
