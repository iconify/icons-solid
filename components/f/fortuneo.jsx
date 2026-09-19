import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ekxdchyro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.93 43.5l10.21-14.2l-5.95-8.19ZM42 15.57l-11.89 5.37l-1-5.37Zm0 0");
}

.jv0rn2smi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.56 8.58l-2.45-.18l-2.76-3.9l-4.63 3l.49 3.19l-1.74 1.5ZM18.19 21.11L34.48 43.5l-5.41-27.93H6Zm0 0");
}
</style><path class="jv0rn2smi"/><path class="ekxdchyro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fortuneo"} {...others} />);
}

export default Component;
