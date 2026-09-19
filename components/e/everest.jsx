import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iisp2qbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 40.021L19.375 7.98l6.373 11.513l3.398-6.25L43.5 39.993z");
}

.wb5xuj0jd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.355 34.845l7.02-15.81l6.373 9.904l3.398-6.234l6.69 12.267z");
}
</style><path class="iisp2qbhp"/><path class="wb5xuj0jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:everest"} {...others} />);
}

export default Component;
