import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aakc5-8kx {
  fill: currentColor;
  d: path("m19 23l-1.4-1.4l1.575-1.6H15v-2h4.175l-1.6-1.6L19 15l4 4zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v7.8q-.675-.4-1.437-.6T19 13q-2.5 0-4.25 1.75T13 19v1zm8-7l8-5V6l-8 5l-8-5v2z");
}
</style><path class="aakc5-8kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:forward-to-inbox"} {...others} />);
}

export default Component;
