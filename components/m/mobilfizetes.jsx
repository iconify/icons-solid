import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n0-xmhsks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.405 5.114a2 2 0 0 0-1.732 1l-3.057 5.295l3.635 6.294L9.616 24l3.635 6.297l-3.635 6.295l3.057 5.295a2 2 0 0 0 1.732 1h19.5a2 2 0 0 0 1.733-1L45.388 25a2 2 0 0 0 0-2l-9.75-16.887a2 2 0 0 0-1.733-1h-19.5");
}

.vccm9gbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.25 17.704h7.27L24.155 24l-3.635 6.296h-7.27L9.616 24H2.345");
}
</style><path class="n0-xmhsks"/><path class="vccm9gbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mobilfizetes"} {...others} />);
}

export default Component;
