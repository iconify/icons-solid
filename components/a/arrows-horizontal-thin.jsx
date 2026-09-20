import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u9_5o_ppv {
  fill: currentColor;
  d: path("m234.83 130.83l-32 32a4 4 0 0 1-5.66-5.66L222.34 132H33.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L33.66 124h188.68l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66");
}
</style><path class="u9_5o_ppv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-horizontal-thin"} {...others} />);
}

export default Component;
