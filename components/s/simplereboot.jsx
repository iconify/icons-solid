import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.um9ylhb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.137 4.5l-4.458 7.298l7.299 4.458");
}

.xl7hz2mwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.909 42.699a16.486 16.486 0 0 1-7.92-25.796m6.689-5.108A16.483 16.483 0 1 1 24 43.5");
}
</style><path class="xl7hz2mwm"/><path class="um9ylhb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simplereboot"} {...others} />);
}

export default Component;
