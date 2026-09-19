import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j2aj__zre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.501 24a19.4 19.4 0 0 0 4.295 12.193h30.408a19.45 19.45 0 0 0 0-24.386H8.796A19.4 19.4 0 0 0 4.501 24");
}

.nkdc8bcig {
  cx: 32.954px;
  cy: 24px;
  r: 6.546px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oqer3o_zd {
  cx: 15.046px;
  cy: 24px;
  r: 6.546px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="oqer3o_zd"/><circle class="nkdc8bcig"/><path class="j2aj__zre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:access-dots"} {...others} />);
}

export default Component;
