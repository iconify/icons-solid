import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fwyq2mn1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.77 37.7v5.8h-3.9v-5.78a13.88 13.88 0 0 0-27.76 0v5.78h-3.9V22.27a17.77 17.77 0 1 1 35.53 0Z");
}
</style><path class="fwyq2mn1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:libremtunnel"} {...others} />);
}

export default Component;
