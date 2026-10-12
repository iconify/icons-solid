import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2ibiyb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7.75h12.5q1.25 0 1.43 1.24l1.39 9.52q.18 1.24-1.07 1.24H4q-1.25 0-1.07-1.24l1.39-9.52q.18-1.24 1.43-1.24M7.5 12.5h9m-7 3.25h5");
}
</style><path class="f2ibiyb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:desk-nameplate"} {...others} />);
}

export default Component;
