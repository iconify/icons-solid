import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8ib910nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15a3 3 0 0 1-4.25-3.75a3 3 0 0 1 1.25-5A3.25 3.25 0 0 1 12 4a3.25 3.25 0 0 1 6 2.25a3 3 0 0 1 1.25 5A3 3 0 0 1 15 15a3 3 0 0 1-6 0m3 3v3.5");
}
</style><path class="h8ib910nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cotton-candy-stick"} {...others} />);
}

export default Component;
