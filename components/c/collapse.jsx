import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_7-axb2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 4.5L14 10m0-5v5h5m.5 9.5L14 14m5 0h-5v5m-9.5.5L10 14m0 5v-5H5m-.5-9.5L10 10m-5 0h5V5");
}
</style><path class="u_7-axb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:collapse"} {...others} />);
}

export default Component;
