import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fy_-t9nqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5H11.667v12.333H24zm12.333 0H24v12.333h12.333zM24 17.833H11.667v12.334H24zm0 12.334H11.667V42.5H24z");
}
</style><path class="fy_-t9nqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:block-puzzle-plus"} {...others} />);
}

export default Component;
