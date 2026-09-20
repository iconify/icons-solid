import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oqa58cimx {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 112H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m92.44 22.66l-48 32A8 8 0 0 1 144 192a8 8 0 0 1-8-8v-64a8 8 0 0 1 12.44-6.66l48 32a8 8 0 0 1 0 13.32");
}
</style><path class="oqa58cimx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:queue-fill"} {...others} />);
}

export default Component;
