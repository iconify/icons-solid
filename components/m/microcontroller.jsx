import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pi_tq6nyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6h12v12H6Zm3.5-3.25V6m5-3.25V6m-5 12v3.25m5-3.25v3.25M2.75 9.5H6m-3.25 5H6m12-5h3.25m-3.25 5h3.25m-12-5.25h.01");
}
</style><path class="pi_tq6nyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:microcontroller"} {...others} />);
}

export default Component;
