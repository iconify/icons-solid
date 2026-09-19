import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jn4yse2du {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.549 5.846v7.206l3.69-2.13l3.723 2.149V5.613M20.185 28.299H33.01v-2.917H20.185zm0 5.868h9.52v-2.836h-9.52z");
}

.yc__36ryq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.272 5.525h-1.98c-.947 0-1.722.852-1.722 1.895v33.16c0 1.043.775 1.895 1.722 1.895h1.98m0-36.95v36.95h21.436c.947 0 1.721-.852 1.721-1.894V7.419c0-1.042-.775-1.894-1.721-1.894z");
}
</style><path class="yc__36ryq"/><path class="jn4yse2du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:school-planner"} {...others} />);
}

export default Component;
