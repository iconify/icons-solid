import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qfjjoe67s {
  fill: currentColor;
  d: path("M204.25 188.24a16.63 16.63 0 0 0 0 23.52a6 6 0 1 1-8.48 8.48a28.61 28.61 0 0 1 0-40.48l9.37-9.38a16.63 16.63 0 0 0-23.52-23.51l-66.75 66.75a28.63 28.63 0 0 1-40.49-40.49l98.76-98.75a16.63 16.63 0 0 0-23.52-23.51l-66.76 66.75a28.63 28.63 0 0 1-40.49-40.49l41.38-41.37a6 6 0 1 1 8.49 8.48L50.86 85.62a16.63 16.63 0 0 0 23.52 23.51l66.75-66.75a28.63 28.63 0 0 1 40.49 40.49l-98.76 98.75a16.63 16.63 0 0 0 23.52 23.51l66.76-66.75a28.63 28.63 0 0 1 40.49 40.49Z");
}
</style><path class="qfjjoe67s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:scribble-light"} {...others} />);
}

export default Component;
