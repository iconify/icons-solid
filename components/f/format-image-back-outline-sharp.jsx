import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5z4mrbpi {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4v-2h4v-2H3v-2h4V9H3V7h18v2h-4v2h4v2h-4v2h4v2zm6-2h6v-2H9zm0-4h6V9H9zM3 5V3h18v2zm9 6");
}
</style><path class="t5z4mrbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-back-outline-sharp"} {...others} />);
}

export default Component;
