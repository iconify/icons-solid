import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r_a32gbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 10.905h-6.522v21.668m0 0a4.522 4.522 0 1 1-9.043 0a4.522 4.522 0 0 1 9.043 0M27.33 10.905H5.5m21.83 8.616H5.5m13.248 8.616H5.5");
}
</style><path class="r_a32gbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tageditor"} {...others} />);
}

export default Component;
