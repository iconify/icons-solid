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

.izhld8bjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.1 23.147c0-1.821 1.48-3.3 3.3-3.3h0c1.82 0 3.3 1.479 3.3 3.3v5.234m9.786-3.3c0 1.82-1.48 3.3-3.3 3.3h0c-1.82 0-3.3-1.48-3.3-3.3h0v-2.162c0-1.82 1.48-3.3 3.3-3.3h0c1.82 0 3.3 1.48 3.3 3.3m0 5.462v-8.762M27.186 25v-2");
}

.k_w3whbcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.5 19.619l-6.6 8.762m6.6 0l-6.6-8.762M7.5 28.381v-5.234c0-1.821 1.48-3.3 3.3-3.3h0c1.82 0 3.3 1.479 3.3 3.3v5.234");
}
</style><path class="k_w3whbcn"/><path class="izhld8bjd"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:max"} {...others} />);
}

export default Component;
