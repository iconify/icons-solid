import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggiwukspm {
  fill: currentColor;
  d: path("m15.064 18.5l-6.926-12H4v-1h4.712l6.925 12H20v1zm.436-12v-1H20v1z");
}
</style><path class="ggiwukspm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-option-key-outline"} {...others} />);
}

export default Component;
