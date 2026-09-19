import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.sa5ig64mk {
  cx: 24.437px;
  cy: 39.265px;
  r: 4.235px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xxddkztie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.804 24.311a4.235 4.235 0 1 1-4.235-7.334L32.196 5.068a4.235 4.235 0 1 1 4.235 7.334zm5.376 9.311a4.235 4.235 0 1 1-4.235-7.335l10.229-5.906a4.235 4.235 0 1 1 4.235 7.335z");
}
</style><path class="xxddkztie"/><circle class="sa5ig64mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flclash"} {...others} />);
}

export default Component;
