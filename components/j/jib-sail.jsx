import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wjdds60fk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v19m5.767-12.631l5.275 8.328a1.5 1.5 0 0 1-1.268 2.303H10.5A1.5 1.5 0 0 1 9 18V9.672a1.5 1.5 0 0 1 2.767-.803");
}
</style><path class="wjdds60fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:jib-sail"} {...others} />);
}

export default Component;
