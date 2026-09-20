import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l1urnzgvl {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 128h-8v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 152 80v64h8a8 8 0 0 1 0 16m-55.64-16L136 103.32V144Z");
}
</style><path class="l1urnzgvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-square-four-fill"} {...others} />);
}

export default Component;
