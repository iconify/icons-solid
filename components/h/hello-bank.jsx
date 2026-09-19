import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gzcig8o1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.973 4.651V43.28M33.564 4.651V43.28M7.973 23.966h25.591");
}

.pjdo-drhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.134 4.651v32.031");
}

.rpwmh7b7g {
  cx: 39.134px;
  cy: 42.937px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="gzcig8o1w"/><circle class="rpwmh7b7g"/><path class="pjdo-drhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hello-bank"} {...others} />);
}

export default Component;
