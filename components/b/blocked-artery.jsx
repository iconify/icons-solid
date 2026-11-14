import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxacr3d8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19m-19 14h19m-11-14c.25 2 1.5 3.5 2.75 3c1 1.5 3.25 1.25 4.25-.25c.75-1 1.25-2 2-2.75m-9 14c.25-2 1.5-3.5 2.75-3c1-1.5 3.25-1.25 4.25.25c.75 1 1.25 2 2 2.75m-16-7H9m-2-2l2 2l-2 2");
}
</style><path class="qxacr3d8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blocked-artery"} {...others} />);
}

export default Component;
