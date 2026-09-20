import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ud3woyhym {
  fill: currentColor;
  d: path("M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="ud3woyhym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-eight"} {...others} />);
}

export default Component;
