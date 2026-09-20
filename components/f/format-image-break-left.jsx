import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx63zibao {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h10v10zM3 5V3h18v2z");
}
</style><path class="dx63zibao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-break-left"} {...others} />);
}

export default Component;
