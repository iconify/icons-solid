import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yuryfgbtb {
  fill: currentColor;
  d: path("M6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14zm2-2h10V10H10zm5-5");
}
</style><path class="yuryfgbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stack-outline-sharp"} {...others} />);
}

export default Component;
