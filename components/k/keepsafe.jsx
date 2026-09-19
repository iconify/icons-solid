import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bur20ffrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.96 32.52V15.48h6.547V7.038H5.5v33.924h15.007V32.52z");
}

.j3mg9mb9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.487 30.292L42.5 7.038H31.129L15.802 24l15.327 16.962H42.5L21.487 17.708");
}
</style><path class="bur20ffrd"/><path class="j3mg9mb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:keepsafe"} {...others} />);
}

export default Component;
