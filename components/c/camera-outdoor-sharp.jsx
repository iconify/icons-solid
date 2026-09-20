import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qzdnx98du {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.27l7 5.27V11h-8.461v8H19v1zm6.923-2.384v-5.231h5.23v2.077L19 13.489v3.022l-1.846-.972v2.077z");
}
</style><path class="qzdnx98du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:camera-outdoor-sharp"} {...others} />);
}

export default Component;
