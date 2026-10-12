import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nodszibxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5q1 0 1.05 1l.9 16.5q.05 1-.95 1H16q-1 0-1.29-.96l-2.42-7.83q-.29-.96-.58 0l-2.42 7.83q-.29.96-1.29.96H5.25q-1 0-.95-1l.9-16.5q.05-1 1.05-1m-1.3 3.5h14.1m-7.05 0V8");
}
</style><path class="nodszibxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jeans"} {...others} />);
}

export default Component;
