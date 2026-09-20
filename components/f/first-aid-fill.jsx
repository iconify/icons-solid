import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z5ybrvncc {
  fill: currentColor;
  d: path("M232 108v40a16 16 0 0 1-16 16h-52v52a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-52H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h52V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v52h52a16 16 0 0 1 16 16");
}
</style><path class="z5ybrvncc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:first-aid-fill"} {...others} />);
}

export default Component;
