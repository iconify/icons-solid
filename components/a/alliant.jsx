import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bzu6gcchc {
  cx: 24px;
  cy: 19.125px;
  r: 9.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ld3m-xblo {
  cx: 14.25px;
  cy: 28.875px;
  r: 9.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zc13o1bio {
  cx: 33.75px;
  cy: 28.875px;
  r: 9.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ld3m-xblo"/><circle class="zc13o1bio"/><circle class="bzu6gcchc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alliant"} {...others} />);
}

export default Component;
