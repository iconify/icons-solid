import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.obxduubug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5C14.242 13.834 8.68 19.71 8.676 28.168v.008C8.676 36.64 15.536 43.5 24 43.5q.793 0 1.566-.08c7.727-.784 13.758-7.31 13.758-15.244v-.01C39.319 19.708 33.758 13.834 24 4.5M17.785 24h12.43m-12.43 10.145h12.43M24 30.215v-12.43");
}
</style><path class="obxduubug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mensinator"} {...others} />);
}

export default Component;
