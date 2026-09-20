import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cl7sh31ws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.017 20.063v7.856m5.63 0l-3.563-3.928l3.563-3.901m-3.563 3.901h-2.067m-11.594 2.912A3.47 3.47 0 0 1 8.5 24.45v-.917a3.47 3.47 0 0 1 3.47-3.47c.958 0 1.825.389 2.453 1.017m19.84 2.911h3.414m1.823 3.928h-5.237v-7.856H39.5m-22.908 7.85l3.405-7.832l3.404 7.856");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="cl7sh31ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cake-bank"} {...others} />);
}

export default Component;
