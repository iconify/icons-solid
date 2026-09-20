import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.r1ek65b0j {
  fill: currentColor;
  d: path("M14 2a1 1 0 0 1 1 1v22a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M9 6a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1");
}
</style><path class="r1ek65b0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:device-eq-28-filled"} {...others} />);
}

export default Component;
