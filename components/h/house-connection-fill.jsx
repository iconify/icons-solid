import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6g3wabrv {
  fill: currentColor;
  d: path("M16.222 18H13v2h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7v-2H7.778a3 3 0 0 1-3-3V9.352a3 3 0 0 1 1.024-2.258L10.024 3.4a3 3 0 0 1 3.952 0l4.222 3.694a3 3 0 0 1 1.024 2.258V15a3 3 0 0 1-3 3");
}
</style><path class="m6g3wabrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-connection-fill"} {...others} />);
}

export default Component;
