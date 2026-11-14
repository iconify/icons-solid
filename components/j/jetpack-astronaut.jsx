import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpfufzphc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15V6.25a3.25 3.25 0 0 1 6.5 0V15ZM14 15V6.25a3.25 3.25 0 0 1 6.5 0V15Zm-4-6.5h4M5 15c0 4 1 6.5 1.75 6.5S8.5 19 8.5 15m7 0c0 4 1 6.5 1.75 6.5S19 19 19 15");
}
</style><path class="bpfufzphc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jetpack-astronaut"} {...others} />);
}

export default Component;
