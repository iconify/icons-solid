import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.az1x063kl {
  fill: currentColor;
  d: path("m204.64 51.8l-64 78.2H176a6 6 0 0 1 0 12h-42v20h42a6 6 0 0 1 0 12h-42v42a6 6 0 0 1-12 0v-42H80a6 6 0 0 1 0-12h42v-20H80a6 6 0 0 1 0-12h35.34l-64-78.2a6 6 0 1 1 9.28-7.6L128 126.53l67.36-82.33a6 6 0 0 1 9.28 7.6");
}
</style><path class="az1x063kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-jpy-light"} {...others} />);
}

export default Component;
