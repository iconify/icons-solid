import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w9upqtb6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.548v36.904l7.238-7.303H42.5v-29.6zm15.51 6.203v16.776m5.947-16.776v16.776M15.905 16.922h16.093m0 6.336H15.905");
}
</style><path class="w9upqtb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:goguma"} {...others} />);
}

export default Component;
