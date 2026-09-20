import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jt8wm8kco {
  fill: currentColor;
  d: path("M212 48v48a4 4 0 0 1-8 0V57.66l-57.17 57.17a4 4 0 0 1-5.66-5.66L198.34 52H160a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-102.83 93.17L52 198.34V160a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8H57.66l57.17-57.17a4 4 0 0 0-5.66-5.66");
}
</style><path class="jt8wm8kco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-out-simple-thin"} {...others} />);
}

export default Component;
