import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a7rag4ice {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 36.55v-6.29m10.64 1.88l-4.45-4.45M39.05 24h-6.29m1.88-10.64l-4.45 4.45M24 8.95v6.29m-10.64-1.88l4.45 4.45M8.95 24h6.29m-1.88 10.64l4.45-4.45");
}
</style><path class="a7rag4ice"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:edslite"} {...others} />);
}

export default Component;
