import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.j2xw61gbe {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m7.417 56.999C45.089 54.138 49 43.876 49 32S45.089 9.862 39.417 5.001C51.28 8.252 60 19.104 60 32s-8.72 23.748-20.583 26.999");
}
</style><path class="j2xw61gbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:waxing-crescent-moon"} {...others} />);
}

export default Component;
