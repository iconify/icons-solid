import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vk1u2cbqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.727 24.18c0-13.838 24.718-8.223 24.718 0c0 7.66-24.718 13.681-24.718 0m34.241-3.626a16.2 16.2 0 0 1 0 6.903q4.61-3.457 0-6.903");
}

.wd2mp0w4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.4 12.737Q40.714 24 30.4 35.263");
}
</style><path class="wd2mp0w4t"/><path class="vk1u2cbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cooltra"} {...others} />);
}

export default Component;
