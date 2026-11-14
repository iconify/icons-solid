import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vx4r0hbbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17v4h-17ZM4 16v4a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 20v-4M7 9.5l-1 3m6-3v3m5-3l1 3");
}
</style><path class="vx4r0hbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:uv-steriliser"} {...others} />);
}

export default Component;
