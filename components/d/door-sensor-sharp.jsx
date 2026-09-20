import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v1h43jbgy {
  fill: currentColor;
  d: path("M7 21v-4h7v-4H7V3h10v18zm-3-5v-2h9v2zm8.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288M19 9V3h2v6z");
}
</style><path class="v1h43jbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:door-sensor-sharp"} {...others} />);
}

export default Component;
