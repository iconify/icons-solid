import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s4663rbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.308 32.808L3.5 24l8.808-8.808m20.5 20.5L24 44.5l-8.808-8.808m0-23.384L24 3.5l8.808 8.808m2.884 2.884L44.5 24l-8.808 8.808");
}
</style><path class="s4663rbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:strafe"} {...others} />);
}

export default Component;
