import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h_lb8vbqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.42 34.816c-13.527-9.872-.914-23.763 8.47-23.032m-.899 6.439l12.734-6.094l-10.662-5.788zm19.589-5.039c13.527 9.872.914 23.764-8.47 23.032m.899-6.439l-12.734 6.094l10.662 5.788z");
}
</style><path class="h_lb8vbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pant"} {...others} />);
}

export default Component;
