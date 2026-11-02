import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.osy3mqf7d {
  fill: currentColor;
  d: path("M11.293 9.293a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15H8a1.002 1.002 0 0 1-.707-1.707Z");
}
</style><path class="osy3mqf7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:caret-up-fill-round"} {...others} />);
}

export default Component;
