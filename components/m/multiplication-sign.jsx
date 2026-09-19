import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.segp53btz {
  fill: currentColor;
  d: path("M62 10.571L53.428 2L32 23.429L10.571 2L2 10.571L23.428 32L2 53.429L10.571 62L32 40.571L53.428 62L62 53.429L40.57 32z");
}
</style><path class="segp53btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:multiplication-sign"} {...others} />);
}

export default Component;
