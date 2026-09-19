import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.neusq4brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 24a5 5 0 1 1-5 5v-5zm-5-5a5 5 0 1 1 5 5h-5zm0 10a5 5 0 1 1-5-5h5z");
}

.suwedhb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h19c7.727 0 14 6.273 14 14v19c0 2.208-1.792 4-4 4h-19c-7.727 0-14-6.273-14-14v-19c0-2.208 1.792-4 4-4");
}
</style><path class="suwedhb5m"/><path class="neusq4brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bdp"} {...others} />);
}

export default Component;
