import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rirkzza1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.47 3.12l6.31 5.01q.47.37.47.97v3.05q0 .6-.6.6H5.35q-.6 0-.6-.6V9.1q0-.6.47-.97l6.31-5.01q.47-.37.94 0M2.75 16.75q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0m-18.52 3.5q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0");
}
</style><path class="rirkzza1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flood"} {...others} />);
}

export default Component;
