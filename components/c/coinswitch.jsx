import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.acjz0ibus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.397 6.326c-4.093 0-11.133 2.238-11.133 8.295c0 11.734 21.993 8.077 21.993 18.501c0 7.913-7.695 11.752-14.498 9.933");
}

.p5ajiub4g {
  cx: 33.169px;
  cy: 8.393px;
  r: 3.893px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rfv14fbkz {
  cx: 14.832px;
  cy: 38.682px;
  r: 3.893px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="p5ajiub4g"/><circle class="rfv14fbkz"/><path class="acjz0ibus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:coinswitch"} {...others} />);
}

export default Component;
