import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fv763l4rj {
  cx: 29.88px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.62px;
  ry: 13.633px;
}

.yzdo72b6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.12 37.633A13.626 13.626 0 0 1 4.5 24a13.626 13.626 0 0 1 13.62-13.633");
}
</style><ellipse class="fv763l4rj"/><path class="yzdo72b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:prepaidguthaben"} {...others} />);
}

export default Component;
