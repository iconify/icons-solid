import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d35gxvbjc {
  fill: currentColor;
  d: path("m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14L52 62.24V216a28 28 0 0 0 28 28h96a28 28 0 0 0 26-17.61a12 12 0 0 0 14.88-18.46M176 220H80a4 4 0 0 1-4-4V88.64L180 203v13a4 4 0 0 1-4 4M75.51 24a12 12 0 0 1 12-12H176a28 28 0 0 1 28 28v98.94a12 12 0 0 1-24 0V40a4 4 0 0 0-4-4H87.51a12 12 0 0 1-12-12");
}
</style><path class="d35gxvbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:device-mobile-slash-bold"} {...others} />);
}

export default Component;
