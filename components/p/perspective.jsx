import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rp5xgubdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.184 14.341a3.226 3.226 0 1 1-6.452 0a3.226 3.226 0 0 1 6.452 0m-2.232 17.157a3.226 3.226 0 1 1-6.452 0a3.226 3.226 0 0 1 6.452 0M43.5 38.077a3.226 3.226 0 0 1-3.226 3.226h0a3.226 3.226 0 0 1-3.226-3.226h0a3.226 3.226 0 0 1 3.226-3.226h0a3.226 3.226 0 0 1 3.226 3.226M41.378 9.923a3.226 3.226 0 0 1-3.226 3.226h0a3.226 3.226 0 0 1-3.226-3.226h0a3.226 3.226 0 0 1 3.226-3.226h0a3.226 3.226 0 0 1 3.226 3.226M13.1 13.82l21.876-3.562m3.167 2.89l1.847 21.75m-2.849 2.591l-26.32-5.164m-2.685-3.989l1.486-10.823");
}
</style><path class="rp5xgubdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:perspective"} {...others} />);
}

export default Component;
