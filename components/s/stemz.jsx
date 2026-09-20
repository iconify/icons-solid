import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lh4n70brq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.25 26a8.5 8.5 0 0 1-7.361-4.25c-1.673-2.727-1.99-5.968 0-8.5A8.5 8.5 0 0 1 22.249 9m3.501 13a8.5 8.5 0 0 1 0 17");
}

.mxxh-mnnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.25 30.5a13 13 0 0 1 0-26m3.5 13c7.18 0 13 5.82 13 13s-5.82 13-13 13");
}

.sgjudib7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.25 21.5a4 4 0 1 1 0-8m3.5 13a4 4 0 0 1 0 8");
}
</style><path class="mxxh-mnnh"/><path class="lh4n70brq"/><path class="sgjudib7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stemz"} {...others} />);
}

export default Component;
