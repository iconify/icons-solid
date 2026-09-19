import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zhufo-bmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.962 24h14.076m-16.307 8.385v-16.77m-3.962 15.47v-14.17m-3.961 12.87v-11.57M3.5 24h1.038m28.731-8.385v16.77m3.962-15.47v14.17m3.961-12.87v11.57M44.5 24h-1.038");
}
</style><path class="zhufo-bmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wger"} {...others} />);
}

export default Component;
