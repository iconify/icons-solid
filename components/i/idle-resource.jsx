import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvjc705gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h10A3.5 3.5 0 0 1 19.5 7v2.5A3.5 3.5 0 0 1 16 13H6a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 6 3.5m.5 4.75h.01m3.49 0h5.5m6 10.25a3 3 0 1 1-3-3a3 3 0 0 0 3 3");
}
</style><path class="nvjc705gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:idle-resource"} {...others} />);
}

export default Component;
