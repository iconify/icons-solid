import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eo-57nb5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.214 18.714v-2.643h-2.643V8.143h-2.642V5.5h-5.286v2.643H24v2.643h-2.643v2.643h-2.643v5.285h2.643v2.643h7.929V24h2.643v2.643h5.285V24h2.643v-5.286z");
}

.so4ajfblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.643 21.357H24V24h-2.643v2.643h-2.643v2.643h-2.643v2.643h-2.642v2.642h-2.643v2.643H8.143V42.5h5.286v-2.643h2.642v-2.643h2.643v-2.643h2.643v-2.642H24v-2.643h2.643v-2.643h2.643v-5.286zm7.928-7.928h2.643v2.643h-2.643z");
}
</style><path class="so4ajfblh"/><path class="eo-57nb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:minecraft-axe"} {...others} />);
}

export default Component;
