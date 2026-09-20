import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xhx36j-3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.37 7.64L28.18 41.53a1.55 1.55 0 0 1-2 .86a1.58 1.58 0 0 1-.86-.86l-5-13a1.5 1.5 0 0 0-.88-.88l-12.95-5a1.51 1.51 0 0 1-1-1.44a1.57 1.57 0 0 1 1-1.43L40.35 5.62a1.54 1.54 0 0 1 2 2Z");
}
</style><path class="xhx36j-3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:opentracks"} {...others} />);
}

export default Component;
