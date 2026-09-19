import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ozx7hdnzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 35.562h3.854V42.5H5.5zm8.287-7.708h3.854v14.645h-3.854zm8.286-7.708h3.854v22.353h-3.854zm8.287-7.708h3.854v30.061h-3.855zM38.646 5.5H42.5v37h-3.854z");
}
</style><path class="ozx7hdnzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-antenna-bars"} {...others} />);
}

export default Component;
