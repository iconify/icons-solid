import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_fkg-3xv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v14.5m-9.5.5a9.5 2.5 0 1 0 19 0a9.5 2.5 0 1 0-19 0M5 13a7 2 0 1 0 14 0a7 2 0 1 0-14 0m2.5-5.5a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0m4.5-5h.01");
}
</style><path class="a_fkg-3xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tiered-display"} {...others} />);
}

export default Component;
