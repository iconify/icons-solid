import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.yvs5yqzlt {
  fill: currentColor;
  d: path("m16 32l15.999-16l16 16l-16 16z");
}
</style><path class="yvs5yqzlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:small-orange-diamond"} {...others} />);
}

export default Component;
