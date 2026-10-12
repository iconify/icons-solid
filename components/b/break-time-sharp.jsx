import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n7fz5fbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.25h12v11.5h-12zm12 2.5h1.5a2.5 2.5 0 0 1 0 5h-1.5M8.25 13v4.25m3-4.25v4.25m-3.5-14l-1 1.5l1 1.5m4-3l-1 1.5l1 1.5");
}
</style><path class="n7fz5fbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:break-time-sharp"} {...others} />);
}

export default Component;
