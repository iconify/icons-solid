import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wuu6b0bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 14.25l-4.875-4.875L4.5 24l14.625 14.625L33.75 24l-4.875-4.875l-9.75 9.75L14.25 24L28.875 9.375L43.5 24L28.875 38.625L24 33.75");
}
</style><path class="wuu6b0bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:swisio"} {...others} />);
}

export default Component;
