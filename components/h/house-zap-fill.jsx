import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.phac2_b9u {
  fill: currentColor;
  d: path("M3 19v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3m10.8-9.4a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 14h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 12h-2Z");
}
</style><path class="phac2_b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-zap-fill"} {...others} />);
}

export default Component;
