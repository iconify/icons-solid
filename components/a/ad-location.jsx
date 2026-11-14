import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0w4v1bve {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.106 3.983Q14.984 1.75 12 1.75T6.894 3.983Q4.75 6.24 4.75 9.5q0 6.328 6.741 12.551q.052.048.111.085t.125.063t.134.038t.139.013t.139-.013t.134-.038q.065-.026.125-.063q.059-.037.111-.085Q19.25 15.828 19.25 9.5q0-3.26-2.144-5.517");
}
</style><path class="w0w4v1bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:ad-location"} {...others} />);
}

export default Component;
