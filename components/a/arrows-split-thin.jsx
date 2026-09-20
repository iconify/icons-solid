import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.txjh4-b2j {
  fill: currentColor;
  d: path("m226.83 186.83l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L188 206.34v-68.68l-60-60l-60 60v68.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L60 206.34V136a4 4 0 0 1 1.17-2.83L124 70.34V24a4 4 0 0 1 8 0v46.34l62.83 62.83A4 4 0 0 1 196 136v70.34l25.17-25.17a4 4 0 0 1 5.66 5.66");
}
</style><path class="txjh4-b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-split-thin"} {...others} />);
}

export default Component;
