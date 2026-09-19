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

.rxawh0b-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.865 23.875a6.136 6.136 0 0 1 12.27 0v8.49a6.136 6.136 0 0 1-12.27 0Z");
}

.wlrz7lpyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.865 23.875v-8.24a6.136 6.136 0 0 1 12.27 0v1.068");
}
</style><path class="rxawh0b-v"/><path class="wlrz7lpyl"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:guide-for-rainbow-six-siege"} {...others} />);
}

export default Component;
