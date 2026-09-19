import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v_jcb1-sa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.674 5.5v37m-22.887-8.962L33.02 25.32a1.525 1.525 0 0 0 0-2.642L8.613 8.588a1.525 1.525 0 0 0-2.287 1.32v28.184a1.525 1.525 0 0 0 2.287 1.32l6.3-3.637");
}
</style><path class="v_jcb1-sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rimusic"} {...others} />);
}

export default Component;
