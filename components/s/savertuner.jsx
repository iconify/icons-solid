import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bdo9uzb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5h-9.75V8.4h5.85V4.5h7.8v3.9h5.85v35.1zm0-21.45v-7.8m-3.9 3.9h7.8M24 37.65v-7.8m-3.9 3.9h7.8");
}
</style><path class="bdo9uzb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:savertuner"} {...others} />);
}

export default Component;
