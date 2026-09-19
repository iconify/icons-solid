import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gjk5a5bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.815 43.5c-7.273-4.534-11.003-8.17-12.94-10.909M21.921 4.614v37.46");
}

.jbtc8_bym {
  cx: 24px;
  cy: 23.344px;
  r: 18.844px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jbtc8_bym"/><path class="gjk5a5bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:quantum"} {...others} />);
}

export default Component;
