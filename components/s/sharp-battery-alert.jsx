import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffv05rb7v {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10zm-4 14h-2v-2h2zm0-4h-2V9h2z");
}
</style><path class="ffv05rb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-alert"} {...others} />);
}

export default Component;
