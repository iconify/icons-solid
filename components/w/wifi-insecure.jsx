import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgcn_ubtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 18.5h.01m-2.485-2.475a3.5 3.5 0 0 1 4.95 0M4.55 13.55a7 7 0 0 1 9.9 0M2.751 10.457a10.5 10.5 0 0 1 13.498 0M18 15v3.25M18 21h.01");
}
</style><path class="pgcn_ubtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wifi-insecure"} {...others} />);
}

export default Component;
