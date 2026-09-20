import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w3x1webuz {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm8-4V7h10v10zm2-2h6V9h-6zM3 5V3h18v2zm0 12v-2h6v2zm13-5");
}
</style><path class="w3x1webuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-inline-right-outline-sharp"} {...others} />);
}

export default Component;
