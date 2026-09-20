import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r0hgc4bkr {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-6h14V5H5zm0 2v2h14v-2zm0 0v2z");
}
</style><path class="r0hgc4bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-navigation-outline-sharp"} {...others} />);
}

export default Component;
