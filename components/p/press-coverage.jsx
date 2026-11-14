import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1q2tqe5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5H4.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2H7m3.5-17H18A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5h-7.5A3.5 3.5 0 0 1 7 17V7a3.5 3.5 0 0 1 3.5-3.5m3.75 0h.01M10 7.5h8.5m-8.5 4h8.5m-8.5 4h5");
}
</style><path class="p1q2tqe5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:press-coverage"} {...others} />);
}

export default Component;
