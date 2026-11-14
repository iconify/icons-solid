import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xo4aywmkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.965 18.364a4 4 0 0 1 0-7.728m1.367-1.517a5.5 5.5 0 0 1 7.918-2.882m1.463 1.228a5.5 5.5 0 0 1 1.266 3.056m1 1.307a3.5 3.5 0 0 1-.573 6.553M9.5 18.5h5");
}
</style><path class="xo4aywmkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cloud-offline"} {...others} />);
}

export default Component;
