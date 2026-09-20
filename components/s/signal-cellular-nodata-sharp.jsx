import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3ea6nbda {
  fill: currentColor;
  d: path("m16.9 20.789l-.688-.689l2.1-2.1l-2.1-2.1l.688-.688l2.1 2.1l2.1-2.1l.688.688l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075zM3 21L21 3v9.489q-.483-.189-.988-.28q-.506-.092-1.012-.092q-2.467 0-4.175 1.708T13.117 18q0 .766.212 1.56q.211.796.634 1.44z");
}
</style><path class="c3ea6nbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-nodata-sharp"} {...others} />);
}

export default Component;
