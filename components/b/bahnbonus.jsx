import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j16239xgd {
  cx: 12.686px;
  cy: 13.571px;
  r: 8.186px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r8hrpllxm {
  cx: 33.081px;
  cy: 21.382px;
  r: 10.418px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u6o06qkfh {
  cx: 21.929px;
  cy: 37.417px;
  r: 5.198px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="j16239xgd"/><circle class="r8hrpllxm"/><circle class="u6o06qkfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bahnbonus"} {...others} />);
}

export default Component;
