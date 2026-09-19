import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vp1_ujbol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.77 4.5h20.46a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H13.77a4 4 0 0 1-4-4v-31a4 4 0 0 1 4-4m3.906 6.812h12.648");
}
</style><path class="vp1_ujbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lessscreen"} {...others} />);
}

export default Component;
