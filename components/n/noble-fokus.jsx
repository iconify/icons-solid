import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.huxpqhujo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.25 24L24 8.008L14.75 24");
}

.sfmnlbcdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 40.215V7.785l-16.965 29.74c-.678 1.188-2.392 1.188-3.07 0L5.5 7.785v32.43z");
}
</style><path class="sfmnlbcdj"/><path class="huxpqhujo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:noble-fokus"} {...others} />);
}

export default Component;
