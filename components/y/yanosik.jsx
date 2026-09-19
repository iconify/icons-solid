import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.etkvrwe0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m2.5 2.622l15.268 30.56l2.276-13.54l13.454-2.057z");
}

.l6jl57bjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.053 20.85c2.656 10.283-5.666 17.783-14.76 14.545l2.1-12.344z");
}

.qy3jhkhuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.905 3.702A21.3 21.3 0 0 1 24 2.5c11.876 0 21.5 9.624 21.5 21.5S35.876 45.5 24 45.5S2.5 35.876 2.5 24c0-2.491.417-4.882 1.202-7.108");
}
</style><path class="etkvrwe0a"/><path class="l6jl57bjj"/><path class="qy3jhkhuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yanosik"} {...others} />);
}

export default Component;
