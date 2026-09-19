import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d7pnffbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.714 27.071l6.627-6.636l2.588 2.541v4.095h4.095l2.56 2.56l-6.655 6.655m15.357-15.357l-6.627 6.636l-2.588-2.541v-4.095h-4.095l-2.56-2.56l6.655-6.655");
}
</style><circle class="cpk0fnbgt"/><path class="d7pnffbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emblem"} {...others} />);
}

export default Component;
