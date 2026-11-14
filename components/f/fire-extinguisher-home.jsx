import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vadwfrb_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21v-9.5a3.25 3.25 0 0 1 6.5 0V21Zm3.25-12.75V6M7.5 5l7-1M13 6c3.5 0 5 1.5 5 4.5V14");
}
</style><path class="vadwfrb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fire-extinguisher-home"} {...others} />);
}

export default Component;
