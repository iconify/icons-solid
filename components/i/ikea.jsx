import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.efkzdq23o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.193 20.007v8m9.857-.014h4m-4-8h4m-4 4h2.608m-2.608-4v8m-7.05-8v8m4.3 0l-3.294-4L21.3 20.02m-3.294 3.973H17m13.608 3.977l2.655-7.977m2.545 8l-2.545-8m1.694 5.324h-3.466");
}

.h_okviblj {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 19.5px;
  ry: 8.5px;
}

.r-x4bhbfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 15.5h39v17h-39z");
}
</style><path class="r-x4bhbfj"/><ellipse class="h_okviblj"/><path class="efkzdq23o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ikea"} {...others} />);
}

export default Component;
