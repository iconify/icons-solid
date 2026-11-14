import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anwhe4bkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 21.5l1-5.5v-2.5L2.75 11A1.25 1.25 0 0 1 4.5 9.25v-3a2.75 2.75 0 0 1 5.5 0V16l.5 5.5Zm17 0l-1-5.5v-2.5l1.75-2.5a1.25 1.25 0 0 0-1.75-1.75v-3a2.75 2.75 0 0 0-5.5 0V16l-.5 5.5ZM4.5 16H10m4 0h5.5");
}
</style><path class="anwhe4bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cleaning-gloves"} {...others} />);
}

export default Component;
