import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fbam1nt0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10c2.5 3 4 5 4 7.5a4 4 0 0 1-8 0C8 15 9.5 13 12 10m0-7.5v3M6 4l1.5 2.5M18 4l-1.5 2.5");
}
</style><path class="fbam1nt0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:freeze-motion"} {...others} />);
}

export default Component;
