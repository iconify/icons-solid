import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x8bo6k2fq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.348 4.5h-4.64v22.613l.004.005a8.693 8.693 0 1 0 4.636 7.687v-21.61h8.695V4.5Z");
}
</style><path class="x8bo6k2fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:auxio-alt"} {...others} />);
}

export default Component;
