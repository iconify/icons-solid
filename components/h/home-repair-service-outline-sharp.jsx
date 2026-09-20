import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7_ejyuqc {
  fill: currentColor;
  d: path("M2 20V8h5V4h10v4h5v12zm6-5v1H6v-1H4v3h16v-3h-2v1h-2v-1zm-4-5v3h2v-1h2v1h8v-1h2v1h2v-3zm5-2h6V6H9z");
}
</style><path class="s7_ejyuqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-repair-service-outline-sharp"} {...others} />);
}

export default Component;
