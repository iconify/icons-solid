import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r4anzbchn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.729 34.984l10.61-16.8l-17.151-6.97L8.773 9.316l1.48 19.815L18.89 44.5z");
}

.skja7ccbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.227 38.684l5.111-20.5L29.111 3.5L8.773 9.316l-5.111 20.5L18.889 44.5z");
}

.zl9a85t4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.729 34.984L10.254 29.13l16.934-17.916zm-6.541-23.77L29.111 3.5m4.618 31.484l5.498 3.7M10.254 29.13l-6.592.685");
}
</style><path class="skja7ccbo"/><path class="r4anzbchn"/><path class="zl9a85t4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rpg-dice"} {...others} />);
}

export default Component;
