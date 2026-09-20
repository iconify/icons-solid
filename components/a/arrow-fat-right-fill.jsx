import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.sozl0zb7n {
  fill: currentColor;
  d: path("m237.66 133.66l-96 96A8 8 0 0 1 128 224v-40H48a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80V32a8 8 0 0 1 13.66-5.66l96 96a8 8 0 0 1 0 11.32");
}
</style><path class="sozl0zb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-right-fill"} {...others} />);
}

export default Component;
