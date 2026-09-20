import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmr2f_bsu {
  fill: currentColor;
  d: path("M3.75 3a.75.75 0 0 1 .75.75v14c0 .966.784 1.75 1.75 1.75h14a.75.75 0 0 1 0 1.5h-14A3.25 3.25 0 0 1 3 17.75v-14A.75.75 0 0 1 3.75 3M14 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7.5 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.5 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="rmr2f_bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-scatter-24-regular"} {...others} />);
}

export default Component;
