import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.innt7-xzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 20.039l8.714 15.264H26.75l10.33 7.088l5.42-4.378L24 5.609L5.5 38.013l5.42 4.378l10.33-7.088h-5.964z");
}
</style><path class="innt7-xzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:apex-legends"} {...others} />);
}

export default Component;
