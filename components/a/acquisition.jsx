import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xoggpx3nt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5v-17A1.5 1.5 0 0 1 4.5 3h8A1.5 1.5 0 0 1 14 4.5v17M14 11h5.5a1.5 1.5 0 0 1 1.5 1.5v9m-18.5 0h19m-15-14h4m-4 4h4");
}
</style><path class="xoggpx3nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:acquisition"} {...others} />);
}

export default Component;
