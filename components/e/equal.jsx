import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ypbo53bfx {
  fill: currentColor;
  d: path("M5 16v-2h14v2zm0-6V8h14v2z");
}
</style><path class="ypbo53bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:equal"} {...others} />);
}

export default Component;
