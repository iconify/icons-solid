import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxh_kzcgf {
  fill: currentColor;
  d: path("M7 20v-1H6q-1.25 0-2.125-.875T3 16v-3H1v-2h2V8q0-1.25.875-2.125T6 5h1V4h2v16zm8 0v-4h-4v-2h4v-4h-4V8h4V4h2v1h1q1.25 0 2.125.875T21 8v3h2v2h-2v3q0 1.25-.875 2.125T18 19h-1v1z");
}
</style><path class="xxh_kzcgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:plug-connect"} {...others} />);
}

export default Component;
