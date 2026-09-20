import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mu1a4bbge {
  fill: currentColor;
  d: path("M188 40v64a4 4 0 0 1-1.17 2.83L132 161.66v60.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34v-60.68l-54.83-54.83A4 4 0 0 1 68 104V40a4 4 0 0 1 8 0v62.34l52 52l52-52V40a4 4 0 0 1 8 0");
}
</style><path class="mu1a4bbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-merge-thin"} {...others} />);
}

export default Component;
