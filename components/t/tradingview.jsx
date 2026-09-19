import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.os9l22bpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.453v7.82h7.365v11.274h7.82V14.453zm21.702 19.094l8.124-19.094H43.5l-8.124 19.094z");
}

.ovg3wyb5m {
  cx: 25.841px;
  cy: 18.363px;
  r: 3.91px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="os9l22bpp"/><circle class="ovg3wyb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tradingview"} {...others} />);
}

export default Component;
