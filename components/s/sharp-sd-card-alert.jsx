import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.piufsb68s {
  fill: currentColor;
  d: path("M20 2H10L4 8v14h16zm-7 15h-2v-2h2zm0-4h-2V8h2z");
}
</style><path class="piufsb68s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sd-card-alert"} {...others} />);
}

export default Component;
