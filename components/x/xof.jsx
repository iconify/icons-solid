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

.oxax_n1og {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.049 19.5l5.849 9m0-9l-5.849 9M30.451 24h2.926m-2.926 4.5v-9h4.501m-11.047 9zc-1.688 0-2.925-1.35-2.925-2.925v-3.037c0-1.688 1.35-3.038 2.925-3.038a3.025 3.025 0 0 1 3.037 3.037v2.925a3.025 3.025 0 0 1-3.037 3.038");
}
</style><circle class="cpk0fnbgt"/><path class="oxax_n1og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xof"} {...others} />);
}

export default Component;
