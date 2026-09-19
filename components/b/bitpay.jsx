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

.qbl52bsjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.144 25.97a7.01 7.01 0 0 1 6.624-5.63h0a4.595 4.595 0 0 1 4.638 5.63l-.645 3.66a7.01 7.01 0 0 1-6.624 5.632h0a4.595 4.595 0 0 1-4.638-5.631m-.993 5.631l3.972-22.524");
}
</style><circle class="cpk0fnbgt"/><path class="qbl52bsjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bitpay"} {...others} />);
}

export default Component;
