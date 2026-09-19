import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qk638qbem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.12 36.24l7-24.38l9.31 13.82l-4.08 7.73l-4-7.68l9.26-14l7 24.43M4.64 24.24L4.5 35.91c17.32 0 13.12-17.2 5.09-17.2M4.77 12.7L15 12.57L4.64 24.24Z");
}
</style><path class="qk638qbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:beyondmenu"} {...others} />);
}

export default Component;
