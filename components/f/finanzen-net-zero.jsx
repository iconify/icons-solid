import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ygz7-09gl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.5v13c0 4.432-3.568 8-8 8h-21c-4.432 0-8-3.568-8-8l37-21c0-4.432-3.568-8-8-8h-21c-4.432 0-8 3.568-8 8v13");
}
</style><path class="ygz7-09gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:finanzen-net-zero"} {...others} />);
}

export default Component;
