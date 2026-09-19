import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hljqs0mlf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 39.93a167 167 0 0 1 37 0M5.5 8.07a167 167 0 0 0 37 0M14.75 39.16V8.84m18.5.134v30.062");
}
</style><path class="hljqs0mlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xenia"} {...others} />);
}

export default Component;
