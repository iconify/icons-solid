import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ig0w9d0ms {
  cx: 9.2px;
  cy: 28.504px;
  r: 0.75px;
  fill: currentColor;
}

.psqgubbwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v37h7.4V12.9h22.2v29.6h7.4v-37h-7.4v3.7H12.9V5.5zm3.7 33.3v-7.796");
}
</style><path class="psqgubbwp"/><circle class="ig0w9d0ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:calisteniapp"} {...others} />);
}

export default Component;
