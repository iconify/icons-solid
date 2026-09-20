import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rikfcf0pw {
  fill: currentColor;
  d: path("M5 20h14v-6H5zm16 2H3V4h4v2H5v6h14V6h-2V4h4zm-9-8v-2zm-1-6V6H9V4h2V2h2v2h2v2h-2v2z");
}
</style><path class="rikfcf0pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-row-above-outline"} {...others} />);
}

export default Component;
