import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fmay49bhn {
  fill: currentColor;
  d: path("M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m32 128H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16");
}
</style><path class="fmay49bhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-teardrop-text-fill"} {...others} />);
}

export default Component;
