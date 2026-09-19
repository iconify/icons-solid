import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hklfj86qr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 33.75h37v8.75h-37zm0-28.25h37v8.75h-37zm0 23.625c23.056 5.886 13.944-7.886 37-2v-8.25c-23.056-5.886-13.944 7.886-37 2z");
}
</style><path class="hklfj86qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:reburger"} {...others} />);
}

export default Component;
