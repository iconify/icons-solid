import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.atu45yblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.153 42.56a21.498 21.498 0 1 1 22.009-.188");
}

.yypc16btt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.157 35.113a12.285 12.285 0 1 1 11.89-.112");
}

.zo9c_tbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.784 28.63a4.915 4.915 0 1 1 .481.228");
}
</style><path class="yypc16btt"/><path class="atu45yblr"/><path class="zo9c_tbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dotmobile"} {...others} />);
}

export default Component;
