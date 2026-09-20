import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.enonn_0cv {
  fill: currentColor;
  d: path("M228.74 188.32L180.27 126H208a6 6 0 0 0 4.76-9.66l-80-104a6 6 0 0 0-9.52 0l-80 104A6 6 0 0 0 48 126h27.73l-48.47 62.32A6 6 0 0 0 32 198h90v42a6 6 0 0 0 12 0v-42h90a6 6 0 0 0 4.74-9.68M44.27 186l48.47-62.32A6 6 0 0 0 88 114H60.19L128 25.84L195.81 114H168a6 6 0 0 0-4.74 9.68L211.73 186Z");
}
</style><path class="enonn_0cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tree-evergreen-light"} {...others} />);
}

export default Component;
