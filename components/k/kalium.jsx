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

.ep_t-3b7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 21.3c-1.187 3.442-4.349 7.197-7.919 8.053c-3.661.878-7.591-3.116-10.117-5.054M11 26.7c1.187-3.443 4.349-7.197 7.919-8.053c3.66-.878 7.591 3.116 10.117 5.053");
}
</style><path class="ep_t-3b7h"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kalium"} {...others} />);
}

export default Component;
