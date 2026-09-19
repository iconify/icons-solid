import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zm__wnbdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 6.6h29.09v22.09a7 7 0 0 1-7 7H12.5a7 7 0 0 1-7-7zm29.09 0h5.91a2 2 0 0 1 2 2v5.7a2 2 0 0 1-2 2h-5.91h0zM5.5 41.4h29.09");
}
</style><path class="zm__wnbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:coffee"} {...others} />);
}

export default Component;
