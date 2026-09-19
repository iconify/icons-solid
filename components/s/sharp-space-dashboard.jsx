import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mokov8tpu {
  fill: currentColor;
  d: path("M11 21H3V3h8zm2 0h8v-9h-8zm8-11V3h-8v7z");
}
</style><path class="mokov8tpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-space-dashboard"} {...others} />);
}

export default Component;
