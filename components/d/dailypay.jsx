import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vv_cg5cwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.393 36.802a15 15 0 0 1 0-21.213a15 15 0 0 1 21.213 0a15 15 0 0 1 0 21.213m-30.106 0h39");
}
</style><path class="vv_cg5cwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dailypay"} {...others} />);
}

export default Component;
