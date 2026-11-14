import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z1-o_vbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5h10a4 4 0 0 1 4 4l.5 6.5a2.5 2.5 0 0 1-4.5 1.5l-2-3H9l-2 3A2.5 2.5 0 0 1 2.5 17l.5-6.5a4 4 0 0 1 4-4m-1.25 5h3M7.25 10v3M16 10.5h.01m2.24 2.25h.01");
}
</style><path class="z1-o_vbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:controller-grip"} {...others} />);
}

export default Component;
