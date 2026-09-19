import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b9q52mbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.637 43.5V29.225L36.362 43.5V29.225z");
}

.fbtpd61jd {
  cx: 24px;
  cy: 16.863px;
  r: 4.121px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.snngwacrp {
  cx: 24px;
  cy: 16.863px;
  r: 12.363px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="snngwacrp"/><circle class="fbtpd61jd"/><path class="b9q52mbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mister-donut-alt-1"} {...others} />);
}

export default Component;
