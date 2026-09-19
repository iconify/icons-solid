import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e2oz3xb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.125 4.5h9.75v29.25h-9.75z");
}

.hh_vnewap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 14.25h29.25V24H9.375zm0 19.5h9.75v9.75h-9.75zm19.5 0h9.75v9.75h-9.75z");
}
</style><path class="e2oz3xb-u"/><path class="hh_vnewap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simple-brick-games"} {...others} />);
}

export default Component;
