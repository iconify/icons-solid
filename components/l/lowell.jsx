import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ewql2jefv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.854 36.188l-2.44-2.438L19.173 24l-9.759-9.75l4.88-4.875L28.93 24L14.294 38.625l4.88 4.875L38.586 24L19.173 4.5l-2.44 2.438");
}
</style><path class="ewql2jefv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lowell"} {...others} />);
}

export default Component;
