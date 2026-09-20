import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lr4--2b6u {
  fill: currentColor;
  d: path("M78 48a14 14 0 1 1-14-14a14 14 0 0 1 14 14m50-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 28a14 14 0 1 0-14-14a14 14 0 0 0 14 14M64 90a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14M64 146a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14m0 56a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64-56a14 14 0 1 0 14 14a14 14 0 0 0-14-14");
}
</style><path class="lr4--2b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:numpad-light"} {...others} />);
}

export default Component;
