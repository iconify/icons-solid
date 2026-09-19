import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dla9fvb3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33 5.5H15a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2m-20 34H8c-1.1 0-2-.9-2-2v-27c0-1.1.9-2 2-2h5m22 0h6c1.1 0 2 .9 2 2v27c0 1.1-.9 2-2 2h-6");
}
</style><path class="dla9fvb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wallpapers"} {...others} />);
}

export default Component;
