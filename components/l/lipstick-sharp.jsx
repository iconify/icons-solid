import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ij4fa_x3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 13.5V6.9l-.002-.58l.502-.29l3.75-2.25l.745-.43l.005.86v9.29Zm-1.75 0h8.5v7.75h-8.5zm0 3h8.5");
}
</style><path class="ij4fa_x3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lipstick-sharp"} {...others} />);
}

export default Component;
