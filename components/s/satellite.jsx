import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m4elzebub {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M26.736 22.723a3.2 3.2 0 1 1-4.224-1.625a3.2 3.2 0 0 1 4.224 1.625Z");
}

.z-1r63ets {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.282 4.5l7.812 13m7.812 13l7.812 13");
}
</style><path class="m4elzebub"/><path class="z-1r63ets"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:satellite"} {...others} />);
}

export default Component;
