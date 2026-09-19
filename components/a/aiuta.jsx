import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zyjiftgfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.5 15.525A3.5 3.5 0 1 1 26.475 18l-1.738 1.738c-.664.86.017 1.29 4.323 4.759L43.5 35.975M22 22.475l-17.5 13.5M37 30.808H11.198");
}
</style><path class="zyjiftgfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aiuta"} {...others} />);
}

export default Component;
