import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bxodpsb0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 15.73v23.72m6.5-26.9v26.9M17.5 19v20.45M24 8.55v30.9M30.5 15v24.45m6.5-17.9v17.9M43.5 11v28.45");
}
</style><path class="bxodpsb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:biblio"} {...others} />);
}

export default Component;
