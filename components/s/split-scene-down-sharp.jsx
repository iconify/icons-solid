import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccb2iyuxs {
  fill: currentColor;
  d: path("M5 9.116V4h14v5.116zM5 20v-7.5H3v-1h18v1h-2V20z");
}
</style><path class="ccb2iyuxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-down-sharp"} {...others} />);
}

export default Component;
