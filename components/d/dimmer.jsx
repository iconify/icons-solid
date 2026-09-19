import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dwik-nblt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M24 4.5a13.51 13.51 0 0 0-13.41 13.41c0 8 7.32 11.07 7.32 15.24v1.21h12.18v-1.21c0-4.15 7.32-7.2 7.32-15.24A13.51 13.51 0 0 0 24 4.5Zm-6.09 29.86v4.57h12.18v-4.57Zm0 4.57v4.57h12.18v-4.57Z");
}
</style><path class="dwik-nblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dimmer"} {...others} />);
}

export default Component;
