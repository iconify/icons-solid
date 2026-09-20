import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mhc7c_bym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 25.5l-17 6.921V25.5zm-37-3l17-6.921V22.5zm17 20l-6.921-17H22.5zm3-37l6.921 17H25.5z");
}
</style><path class="mhc7c_bym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rakuten-ai"} {...others} />);
}

export default Component;
