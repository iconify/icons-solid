import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5xde2s0x {
  fill: currentColor;
  d: path("M3 9a1 1 0 0 1 1-1h7V4a1.002 1.002 0 0 1 1.707-.707l8 8a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 11 20v-4H4a1 1 0 0 1-1-1Z");
}
</style><path class="f5xde2s0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-right-fill-sharp"} {...others} />);
}

export default Component;
