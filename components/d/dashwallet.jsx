import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nojgvvblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.85 41.434l1.408-9.362h15.035c4.137 0 6.845-7.443 6.845-11.218s-3.06-4.926-6.835-4.926H13.721l1.418-9.362h11.164c8.946 0 16.197 5.332 16.197 14.288c0 8.946-7.25 20.58-16.207 20.58z");
}

.xnz1ibg2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 27.519h13.926l1.066-7.038H6.556z");
}
</style><path class="nojgvvblu"/><path class="xnz1ibg2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dashwallet"} {...others} />);
}

export default Component;
