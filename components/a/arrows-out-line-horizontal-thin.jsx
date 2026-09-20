import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nlzsk5brh {
  fill: currentColor;
  d: path("M132 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m-36 84H25.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 1 0 5.66-5.66L25.66 132H96a4 4 0 0 0 0-8m146.83 1.17l-32-32a4 4 0 0 0-5.66 5.66L230.34 124H160a4 4 0 0 0 0 8h70.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66");
}
</style><path class="nlzsk5brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-out-line-horizontal-thin"} {...others} />);
}

export default Component;
