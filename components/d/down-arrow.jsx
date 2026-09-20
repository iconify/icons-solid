import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.hxbgffb0y {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M64 105.05L32.86 62.58h19.42V22.95h23.23v39.63h19.62z");
}
</style><path class="hxbgffb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:down-arrow"} {...others} />);
}

export default Component;
