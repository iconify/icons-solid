import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jn9e-5syo {
  fill: currentColor;
  d: path("M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 84h144a4 4 0 0 1 4 4v20H36V88a4 4 0 0 1 4-4m148 116a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h152Zm32-32a4 4 0 0 1-4 4h-20V88a12 12 0 0 0-12-12H68V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z");
}
</style><path class="jn9e-5syo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:browsers-thin"} {...others} />);
}

export default Component;
