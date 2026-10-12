import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sef63e_ey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h7.5v6.5h-7.5zm11 10h7.5v6.5h-7.5zM10.25 7h7.25v5.25m-2-2l2 2l2-2M13.75 17h-4.5m0-2.25v4.5");
}
</style><path class="sef63e_ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:linked-list-sharp"} {...others} />);
}

export default Component;
