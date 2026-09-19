import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jsfub_c0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.353 23.065c-1.278 0-2.463.39-3.446 1.056a4.8 4.8 0 0 0 .62-2.332a4.87 4.87 0 0 0-4.873-4.871c-1.773 0-3.31.957-4.162 2.373a6.826 6.826 0 0 0-13.651.18c0 1.325.397 2.548 1.052 3.594h-2.245a6.147 6.147 0 0 0 0 12.295h26.705a6.147 6.147 0 0 0 0-12.295");
}
</style><path class="jsfub_c0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:onskeskyen"} {...others} />);
}

export default Component;
