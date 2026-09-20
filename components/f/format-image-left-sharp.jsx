import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.weugfgbse {
  fill: currentColor;
  d: path("M3 17V7h10v10zM3 5V3h18v2zm12 4V7h6v2zm0 4v-2h6v2zm0 4v-2h6v2zM3 21v-2h18v2z");
}
</style><path class="weugfgbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-left-sharp"} {...others} />);
}

export default Component;
