import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dhmq-9bvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.2 35.7C9.738 35.7 4.5 30.462 4.5 24s5.238-11.7 11.7-11.7h15.6c6.462 0 11.7 5.238 11.7 11.7s-5.238 11.7-11.7 11.7z");
}

.er2_cebhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.8 30.235a7.2 7.2 0 1 1 .53-12.133");
}
</style><path class="dhmq-9bvd"/><path class="er2_cebhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:connectlife"} {...others} />);
}

export default Component;
