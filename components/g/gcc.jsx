import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f4tndo65j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.999 28.009A21.38 21.38 0 0 1 28.008 45M28 3a21.38 21.38 0 0 1 17 17m-42-.007A21.38 21.38 0 0 1 19.99 3.002M19.991 45A21.38 21.38 0 0 1 3 28.009");
}

.m6w8_dgkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.696 25.537v.038a3.09 3.09 0 0 1-3.09 3.09h0a3.09 3.09 0 0 1-3.09-3.09v-3.149a3.09 3.09 0 0 1 3.09-3.09h0a3.09 3.09 0 0 1 3.09 3.09v.039m-8.594-.038a3.09 3.09 0 0 0-3.09-3.09h0a3.09 3.09 0 0 0-3.09 3.09v3.148a3.09 3.09 0 0 0 3.09 3.09h0a3.09 3.09 0 0 0 3.09-3.09h-3.09m20.278-.038v.038a3.09 3.09 0 0 1-3.09 3.09h0a3.09 3.09 0 0 1-3.09-3.09v-3.149a3.09 3.09 0 0 1 3.09-3.09h0a3.09 3.09 0 0 1 3.09 3.09v.039");
}

.n49fgtbiw {
  cx: 23.999px;
  cy: 24.001px;
  r: 17.259px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="f4tndo65j"/><circle class="n49fgtbiw"/><path class="m6w8_dgkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gcc"} {...others} />);
}

export default Component;
