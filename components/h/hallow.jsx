import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fdsqkbb7k {
  cx: 24px;
  cy: 27.813px;
  r: 15.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m_nwlmbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.95 5.836c.079 1.043-5.655 2.327-12.807 2.867s-13.014.134-13.093-.91q0 0 0 0c-.079-1.043 5.655-2.327 12.807-2.867s13.014-.133 13.093.91q0 0 0 0");
}
</style><circle class="fdsqkbb7k"/><path class="m_nwlmbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hallow"} {...others} />);
}

export default Component;
