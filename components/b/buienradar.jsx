import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r1tvsoh9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.748 31.237A21.507 21.507 0 0 1 35.235 5.666m7.099 7.098a21.51 21.51 0 0 1-25.571 31.488M4.11 36.11a5.5 5.5 0 0 0 7.78 7.78L45.5 2.5Z");
}
</style><path class="r1tvsoh9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:buienradar"} {...others} />);
}

export default Component;
