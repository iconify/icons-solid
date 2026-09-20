import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ef2-b1b1f {
  fill: currentColor;
  d: path("m226.83 194.83l-32 32a4 4 0 0 1-5.66-5.66L214.34 196H80a4 4 0 0 1-4-4V49.66L50.83 74.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L84 49.66V188h130.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66");
}
</style><path class="ef2-b1b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vector-two-thin"} {...others} />);
}

export default Component;
