import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g11-o1ird {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V7a3 3 0 0 1 6 0v14m0-7h10.5a2 2 0 0 1 2 2v5M9 18h12.5M6 9.5h.01M6 14h.01");
}
</style><path class="g11-o1ird"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:headboard-upholstered"} {...others} />);
}

export default Component;
