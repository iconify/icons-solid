import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.je3hzdbmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.5v11.964m-8.99 18.374V10.171m17.984 27.658V10.18");
}

.joiomubtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c11.867 0 21.5 9.633 21.5 21.5c0 11.877-9.633 21.5-21.5 21.5c-11.877 0-21.5-9.623-21.5-21.5C2.5 12.133 12.123 2.5 24 2.5");
}

.xsqzccc6b {
  cx: 24px;
  cy: 24px;
  r: 16.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="joiomubtv"/><circle class="xsqzccc6b"/><path class="je3hzdbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:toneprint"} {...others} />);
}

export default Component;
