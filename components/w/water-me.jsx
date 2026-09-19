import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mw7czacfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.619L4.5 24.964h5.85V40.38h27.3V24.964h5.85Z");
}

.t53l0ccyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.901 28.818a3.9 3.9 0 0 1-7.8 0c0-2.12 3.9-7.71 3.9-7.71s3.9 5.59 3.9 7.71");
}
</style><path class="mw7czacfv"/><path class="t53l0ccyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:water-me"} {...others} />);
}

export default Component;
