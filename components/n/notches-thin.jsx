import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.r8nymgbkt {
  fill: currentColor;
  d: path("m210.83 130.83l-80 80a4 4 0 1 1-5.66-5.66l80-80a4 4 0 1 1 5.66 5.66m-16-93.66a4 4 0 0 0-5.66 0l-152 152a4 4 0 0 0 5.66 5.66l152-152a4 4 0 0 0 0-5.66");
}
</style><path class="r8nymgbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notches-thin"} {...others} />);
}

export default Component;
