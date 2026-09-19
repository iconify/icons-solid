import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g_ihqfb9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.654 29.924A21.499 21.499 0 1 1 45.486 24M8.287 31.807h31.478M45.5 24.03H2.502m21.715-4.238v25.59M35.65 5.936L24.216 19.792M12.429 5.879l11.788 13.913");
}
</style><path class="g_ihqfb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:digital-yuan"} {...others} />);
}

export default Component;
