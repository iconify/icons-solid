import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.kcehd9pft {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.99 121.76L67.28 66.84h31.71L64 6.24l-34.99 60.6h31.71l-31.71 54.92z");
}
</style><path class="kcehd9pft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:fast-up-button"} {...others} />);
}

export default Component;
