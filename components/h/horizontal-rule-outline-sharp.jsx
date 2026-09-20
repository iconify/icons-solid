import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvqx3mvqo {
  fill: currentColor;
  d: path("M5 12.5v-1h14v1z");
}
</style><path class="wvqx3mvqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-rule-outline-sharp"} {...others} />);
}

export default Component;
