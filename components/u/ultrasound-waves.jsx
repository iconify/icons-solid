import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.di9m2bbbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5V6h-5Zm5.944 6.012a6.5 6.5 0 0 1-6.888 0m8.694 3.581a10.5 10.5 0 0 1-10.5 0m12.057 3.71a14.5 14.5 0 0 1-13.614 0");
}
</style><path class="di9m2bbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ultrasound-waves"} {...others} />);
}

export default Component;
