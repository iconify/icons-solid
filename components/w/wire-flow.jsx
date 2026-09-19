import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c9o58u-lo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 14.117l12.962 19.766m12.962-19.766l-4.041 6.163m-4.992 7.612l-3.93 5.991m.115-19.766l12.962 19.766M43.5 14.117L30.538 33.883");
}
</style><path class="c9o58u-lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wire-flow"} {...others} />);
}

export default Component;
