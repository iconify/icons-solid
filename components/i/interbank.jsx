import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t6yxen0nk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 38.5c0 2.216-1.784 4-4 4h-33v-33c0-2.216 1.784-4 4-4h33z");
}

.utd-k45ag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.1 11.05l-22.2 3.7v22.2l22.2-3.7z");
}
</style><path class="t6yxen0nk"/><path class="utd-k45ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:interbank"} {...others} />);
}

export default Component;
