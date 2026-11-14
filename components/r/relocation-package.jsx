import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmajujijj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10.5h9.5a1.75 1.75 0 0 1 1.75 1.75v7A1.75 1.75 0 0 1 13.75 21h-9.5a1.75 1.75 0 0 1-1.75-1.75v-7a1.75 1.75 0 0 1 1.75-1.75M2.5 14h13M9 10.5V14m9.5-2s-3-2.75-3-5.25a3 3 0 0 1 6 0c0 2.5-3 5.25-3 5.25");
}
</style><path class="wmajujijj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:relocation-package"} {...others} />);
}

export default Component;
