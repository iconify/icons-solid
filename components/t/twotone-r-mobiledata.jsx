import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.quxz162xh {
  fill: currentColor;
  d: path("M7.8 7.2L9 10H7L5.87 7.33H4V10H2V2h5c1.13 0 2 .87 2 2v1.33c0 .8-.53 1.54-1.2 1.87M7 4H4v1.33h3z");
}
</style><path class="quxz162xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-r-mobiledata"} {...others} />);
}

export default Component;
