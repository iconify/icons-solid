import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iruzqnsff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.78 24H43.5m-22.66 0H4.5m26.28 0l-9.94 7.43V16.57Zm12.72 0L24 43.5L4.5 24L24 4.5Z");
}
</style><path class="iruzqnsff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stremio"} {...others} />);
}

export default Component;
