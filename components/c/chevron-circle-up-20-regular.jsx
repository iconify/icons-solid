import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.xgn_xbcik {
  fill: currentColor;
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0m7 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16m-3.146-6.146a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L10 8.707z");
}
</style><path class="xgn_xbcik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-circle-up-20-regular"} {...others} />);
}

export default Component;
