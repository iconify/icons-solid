import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6hs-wbwx {
  fill: currentColor;
  d: path("M3 5V3h18v2zm0 16V7h18v14z");
}
</style><path class="c6hs-wbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-header-sharp"} {...others} />);
}

export default Component;
