import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.goc-kfbyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.224 5.5H5.5v35.724h12.299V17.799h23.425z");
}

.ha8mnqrjt {
  cx: 31.251px;
  cy: 31.251px;
  r: 11.249px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="goc-kfbyz"/><circle transform="rotate(-22.5 31.251 31.251)" class="ha8mnqrjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:front"} {...others} />);
}

export default Component;
