import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.uv87a1b1b {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-5.9 43.872c-7.662 0-13.874-6.211-13.874-13.872c0-7.663 6.211-13.874 13.874-13.874S39.973 24.337 39.973 32c0 7.661-6.209 13.872-13.873 13.872");
}
</style><path class="uv87a1b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-flag-bangladesh"} {...others} />);
}

export default Component;
