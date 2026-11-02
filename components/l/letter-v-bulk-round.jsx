import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1rvn5bri {
  fill: currentColor;
  d: path("m12 17.152l5.064-13.503a1 1 0 1 1 1.872.702l-6 16a1 1 0 0 1-1.872 0l-6-16a1 1 0 1 1 1.872-.702Z");
}
</style><path class="m1rvn5bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-v-bulk-round"} {...others} />);
}

export default Component;
