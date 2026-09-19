import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k9mw40byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.5 36c-6.627 0-12-5.373-12-12s5.373-12 12-12h17c6.627 0 12 5.373 12 12s-5.373 12-12 12z");
}
</style><path class="k9mw40byw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zerocam"} {...others} />);
}

export default Component;
