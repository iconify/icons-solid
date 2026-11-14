import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-95h_b8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4zA2.25 2.25 0 0 1 10 6.25v11.5A2.25 2.25 0 0 1 7.75 20a2.25 2.25 0 0 1-2.25-2.25V6.25A2.25 2.25 0 0 1 7.75 4m8.5 0za2.25 2.25 0 0 1 2.25 2.25v11.5A2.25 2.25 0 0 1 16.25 20A2.25 2.25 0 0 1 14 17.75V6.25A2.25 2.25 0 0 1 16.25 4");
}
</style><path class="y-95h_b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pause"} {...others} />);
}

export default Component;
