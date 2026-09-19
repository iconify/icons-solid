import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ifvgtqmtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 6.862H14.325c-8.078 0-12.02 4.093-5.687 13.14");
}

.vsdcl7b0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.992 40.465c3.188.948 13.431 2.585 14.858-8.788s2.805-24.815 2.805-24.815");
}
</style><path class="vsdcl7b0p"/><path class="ifvgtqmtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:raumfeld"} {...others} />);
}

export default Component;
