import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b5pk8zm1g {
  fill: currentColor;
  d: path("m61.17 98.83l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L37.66 64l29.17 29.17a4 4 0 0 1-5.66 5.66m40 0a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66l-32-32a4 4 0 0 0-5.66 5.66L130.34 64l-29.17 29.17a4 4 0 0 0 0 5.66M200 44h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-64a4 4 0 0 0-8 0v64a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12");
}
</style><path class="b5pk8zm1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:code-block-thin"} {...others} />);
}

export default Component;
