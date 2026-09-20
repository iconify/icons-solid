import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.j9yjp7bte {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M22 15.5v97L106 64z");
}
</style><path class="j9yjp7bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:play-button"} {...others} />);
}

export default Component;
