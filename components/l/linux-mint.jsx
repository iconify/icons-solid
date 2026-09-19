import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k0doo7b5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.31 28.18v-8.847c0-2.062 1.543-3.91 3.601-4.017a3.807 3.807 0 0 1 4.012 3.801v9.59a5.916 5.916 0 0 1-5.917 5.917H18.995a5.916 5.916 0 0 1-5.916-5.916V13.376");
}

.l4pz3ib_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.31 19.117a3.807 3.807 0 1 0-7.614 0v9.063");
}
</style><path class="l4pz3ib_x"/><path class="k0doo7b5g"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:linux-mint"} {...others} />);
}

export default Component;
