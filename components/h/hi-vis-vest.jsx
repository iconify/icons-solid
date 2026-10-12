import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rx4dpibjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.75zq1.25 0 1.63 1.19l1.24 3.87q.38 1.19.76 0l1.24-3.87q.38-1.19 1.63-1.19t1.93 1.05l2.39 3.65q.68 1.05.68 2.3V20q0 1.25-1.25 1.25H5q-1.25 0-1.25-1.25V9.75q0-1.25.68-2.3L6.82 3.8q.68-1.05 1.93-1.05m-5 10.5h16.5m-16.5 4h16.5");
}
</style><path class="rx4dpibjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hi-vis-vest"} {...others} />);
}

export default Component;
