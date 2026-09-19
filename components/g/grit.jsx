import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lynbc737v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 31.374l5.281 5.235l9.145-9.38m5.342 6.263H42.5m-37-17.955l5.281 5.234l9.145-9.38m5.342 6.264H42.5");
}
</style><path class="lynbc737v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:grit"} {...others} />);
}

export default Component;
