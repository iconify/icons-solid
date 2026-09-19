import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fpo06rukq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.23 19.71a6.77 6.77 0 1 1 13.54 0a6.08 6.08 0 0 1-2 4.79c-1.4 1.12-4.81 3-4.81 5.83v.81");
}

.mi6x78k3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 43.5h23a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4h-23a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4");
}

.suyych5yn {
  cx: 24px;
  cy: 34.66px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="mi6x78k3j"/><circle class="suyych5yn"/><path class="fpo06rukq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:feedback"} {...others} />);
}

export default Component;
