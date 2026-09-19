import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xnph78ctu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.004 19.353l.823-.145l2.87 16.275l-.784.138m1.391-17.026l3.64-.642l2.87 16.275l-3.64.642zm4.689 15.954l1.443 8.179m2.805-25.708l4.99 28.301m.306-29.236l3.64-.641l2.87 16.275l-3.64.641zm7.117-1.255l3.64-.641l2.87 16.275l-3.64.641zm7.117-1.255l3.64-.641l2.87 16.275l-3.64.641zm-2.427 17.209l2.022 11.467m5.095-12.721l1.189 6.746m-15.423-4.237l2.29 12.984m13.62-32.57l-38.31 6.755");
}
</style><circle class="cpk0fnbgt"/><path class="xnph78ctu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pianoli"} {...others} />);
}

export default Component;
