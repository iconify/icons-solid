import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tp44tpvmj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 7.25H6q-1.76 0-3.005 1.245T1.75 11.5v1q0 1.76 1.245 3.005T6 16.75h12q1.76 0 3.005-1.245T22.25 12.5v-1q0-1.76-1.245-3.005T18 7.25M6.5 9.75H13q2.25 0 2.25 2.25T13 14.25H6.5q-2.25 0-2.25-2.25T6.5 9.75");
}
</style><path class="tp44tpvmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:progress-bar"} {...others} />);
}

export default Component;
