import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a86xc_7pb {
  cx: 14.25px;
  cy: 24px;
  r: 5.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.moycffb8i {
  cx: 33.75px;
  cy: 24px;
  r: 5.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xc4-653cb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.875 32.444A9.75 9.75 0 1 0 24 24a9.75 9.75 0 1 1-4.875-8.443");
}
</style><circle class="a86xc_7pb"/><circle class="moycffb8i"/><path class="xc4-653cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:digigo"} {...others} />);
}

export default Component;
