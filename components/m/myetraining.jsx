import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bpnxyxnsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.922 21.399l32.35.03l-2.195 5.286l-32.416.116z");
}

.g0u6-cb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.077 26.715l-2.195 5.279l-32.418.123l2.197-5.285m2.261-5.433l2.19-5.282l32.352.03l-2.192 5.283");
}
</style><path class="g0u6-cb1w"/><path class="bpnxyxnsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myetraining"} {...others} />);
}

export default Component;
