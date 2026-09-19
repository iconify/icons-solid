import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v0xsv5b1r {
  cx: 24.036px;
  cy: 35.466px;
  r: 0.75px;
  fill: currentColor;
}

.xw8nubc0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.484 10.428h39v22.886h-39zm6.876 22.886h25.353v4.304H11.36z");
}
</style><path class="xw8nubc0w"/><circle class="v0xsv5b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:orange-tv"} {...others} />);
}

export default Component;
