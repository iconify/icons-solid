import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s091xeb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 18.5l4-4.5l3 1.5l4-7.5L17 4M2.5 9.5h2m2.5 0h2m6.5 0h2m2.5 0h1.5m-6 9.5v-1.75a2.5 2.5 0 0 1 5 0V19l.75 1h-6.5Zm1.75 2.75h1.5");
}
</style><path class="s091xeb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:threshold-alert"} {...others} />);
}

export default Component;
