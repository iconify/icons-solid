import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.crfiu0aqa {
  fill: currentColor;
  d: path("M182 208a6 6 0 0 1-6 6h-16a38 38 0 0 1-32-17.55A38 38 0 0 1 96 214H80a6 6 0 0 1 0-12h16a26 26 0 0 0 26-26v-42h-18a6 6 0 0 1 0-12h18V80a26 26 0 0 0-26-26H80a6 6 0 0 1 0-12h16a38 38 0 0 1 32 17.55A38 38 0 0 1 160 42h16a6 6 0 0 1 0 12h-16a26 26 0 0 0-26 26v42h18a6 6 0 0 1 0 12h-18v42a26 26 0 0 0 26 26h16a6 6 0 0 1 6 6");
}
</style><path class="crfiu0aqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cursor-text-light"} {...others} />);
}

export default Component;
