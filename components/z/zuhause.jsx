import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c1fniwbsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24v14.5c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4V24M24 5.5L5.5 24M24 5.5L42.5 24m-27.75-9.25l26.581 26.581M30.935 12.435L5.5 37.87");
}
</style><path class="c1fniwbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zuhause"} {...others} />);
}

export default Component;
