import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pyns-5bxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5m-17 2.5h15.5L18.5 19.6a1.85 1.85 0 0 1-1.84 1.65H7.34A1.85 1.85 0 0 1 5.5 19.6Zm4.75 3v6m3-6v6m3-6v6");
}
</style><path class="pyns-5bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:laundry-basket"} {...others} />);
}

export default Component;
