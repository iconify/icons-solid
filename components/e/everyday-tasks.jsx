import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gwu91igie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.873 24.204l7.295 7.376l22.34-23.092");
}

.q2dr806kf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.272 18.654A20 20 0 0 1 44 24a20 20 0 1 1-8.678-16.487");
}
</style><path class="q2dr806kf"/><path class="gwu91igie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:everyday-tasks"} {...others} />);
}

export default Component;
