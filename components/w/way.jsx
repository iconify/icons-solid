import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cqas4taon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.144 15.707H7.398A2.9 2.9 0 0 0 4.5 18.605v17.434a2.9 2.9 0 0 0 2.898 2.898h26.56a2.9 2.9 0 0 0 2.898-2.898v-3.746M11.144 12.809H43.5m-32.356 5.796H43.5");
}

.oty5qzb3q {
  width: 32.356px;
  height: 23.23px;
  x: 11.144px;
  y: 9.063px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.898px;
}
</style><rect class="oty5qzb3q"/><path class="cqas4taon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:way"} {...others} />);
}

export default Component;
