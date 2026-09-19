import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.clowe8l7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30v13.5m0 0l-11.691-6.75v-13.5L24 16.5l11.691 6.75v13.5z");
}

.f5o1hdcev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.309 23.25L24 30l11.691-6.75");
}

.sx42blhel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.154 31.875v-5.25l11.691-6.75M18 16.5v-12m-4 14v-14m16 12v-12m4 14v-14");
}
</style><path class="clowe8l7v"/><path class="f5o1hdcev"/><path class="sx42blhel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:landrop"} {...others} />);
}

export default Component;
