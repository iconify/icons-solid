import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kt13lvb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.733 20.111V23c0 .554-.446 1-1 1H24v3.889m-1.5-3.89h-3.233c-.554 0-1-.445-1-1v-2.888m13.766 7.778l7.58-.006a3.886 3.886 0 0 0 0-7.772h-7.58m-27.533 0h9.522a1.945 1.945 0 0 1 0 3.889a1.945 1.945 0 0 1 0 3.889H4.5M14.022 24H4.5");
}
</style><path class="kt13lvb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:byd"} {...others} />);
}

export default Component;
