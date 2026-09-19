import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.izcioekpx {
  cx: 24px;
  cy: 26.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.4px;
  ry: 16.6px;
}

.pw9rwcbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.1 28.9V17.5M19 4.5h10.1v3.4H19zm15.6 9.6l2.9-2.7l2.1 2.3l-2.9 2.7");
}
</style><ellipse class="izcioekpx"/><path class="pw9rwcbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tenbitclockwidget"} {...others} />);
}

export default Component;
