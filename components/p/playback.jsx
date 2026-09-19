import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f5_hz1bub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.288 31.273C43.32 29.173 44.5 26.677 44.5 24c0-7.47-9.178-13.526-20.5-13.526S3.5 16.53 3.5 24S12.678 37.526 24 37.526");
}

.g5257x9qv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.115 34.462l4.907 2.899l-4.907 2.899z");
}
</style><path class="f5_hz1bub"/><path class="g5257x9qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:playback"} {...others} />);
}

export default Component;
