import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq3a_d9ub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h6l.75 6.5L19.5 13c1.1.75 1.5 1.75 1.5 3v3.5H3.5v-3l3-7Zm-4 13.5H21M8.25 7h5m-5.5 5.5H16");
}
</style><path class="fq3a_d9ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ski-boot"} {...others} />);
}

export default Component;
