import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.u3f386brf {
  fill: var(--svg-color--03a9f4, #03a9f4);
  d: path("M126.71 64c0 34.63-28.07 62.71-62.71 62.71c-34.63 0-62.71-28.08-62.71-62.71C1.29 29.36 29.37 1.29 64 1.29c34.64 0 62.71 28.07 62.71 62.71");
}
</style><path class="u3f386brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:blue-circle"} {...others} />);
}

export default Component;
