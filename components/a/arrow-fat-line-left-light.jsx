import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e4d-nzbne {
  fill: currentColor;
  d: path("M184 74h-58V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h58a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 96h-58a6 6 0 0 0-6 6v33.51L32.49 128L114 46.49V80a6 6 0 0 0 6 6h58Zm44-90v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0");
}
</style><path class="e4d-nzbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-line-left-light"} {...others} />);
}

export default Component;
