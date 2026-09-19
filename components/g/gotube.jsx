import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ptt7uobcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.97 21.044a4.828 4.828 0 1 0-9.655 0v4.919a4.828 4.828 0 0 0 9.656 0h-4.828m13.645 4.827a4.843 4.843 0 0 1-4.843-4.843v-4.934a4.843 4.843 0 1 1 9.686 0v4.934a4.843 4.843 0 0 1-4.843 4.843");
}

.yjngxpqlv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.118 44.436C-1.401 46.384-.426 3.5 17.118 3.5c11.696 0 27.29 12.67 27.29 18.518c0 6.823-15.594 22.418-27.29 22.418");
}
</style><path class="yjngxpqlv"/><path class="ptt7uobcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gotube"} {...others} />);
}

export default Component;
