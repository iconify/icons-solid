import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s5qfcr47q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18h.01m-3.546-3.536A5 5 0 0 1 13 13.67m-9.218-2.388a9.5 9.5 0 0 1 13.436 0M2.075 6.819a14 14 0 0 1 16.85 0M19 13v4.5m0 3.25h.01");
}
</style><path class="s5qfcr47q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wifi-error"} {...others} />);
}

export default Component;
