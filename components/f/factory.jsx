import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9ofpwbpl {
  fill: currentColor;
  d: path("M3 21V10.648l5-2.129v1.962l5-2.02V11h8v10zm8.23-3.462h1.54v-3.076h-1.54zm-4 0h1.54v-3.076H7.23zm8 0h1.54v-3.076h-1.54zm5.647-7.423h-2.875l.889-6.346h1.225z");
}
</style><path class="n9ofpwbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:factory"} {...others} />);
}

export default Component;
