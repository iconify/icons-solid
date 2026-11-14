import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4d33nb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 3c0 4-1.25 6.5-2.75 8.5c-1.25 1.5-.75 4 1.25 4c.75 0 1.25.75 2.75.75s2-.75 2.75-.75c2 0 2.5-2.5 1.25-4c-1.5-2-2.75-4.5-2.75-8.5M7.5 19h.01M10 20.75h.01m1.99-2h.01m1.99 2h.01M16.5 19h.01");
}
</style><path class="j4d33nb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sneeze"} {...others} />);
}

export default Component;
