import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqrzrq8mn {
  fill: currentColor;
  d: path("M2.73 20.154v-17h9v4h9.54v13zm1-1h7v-3h-7zm0-4h7v-3h-7zm0-4h7v-3h-7zm0-4h7v-3h-7zm8 12h8.54v-11h-8.54zm2.386-7v-1H17.5v1zm0 4v-1H17.5v1z");
}
</style><path class="jqrzrq8mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:corporate-fare-outline"} {...others} />);
}

export default Component;
