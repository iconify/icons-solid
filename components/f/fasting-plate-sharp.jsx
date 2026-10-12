import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dsboirjzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 3.29a4 4 0 1 0 1.46 5.46A3.1 3.1 0 0 1 14 3.29ZM2.75 14.5h18.5c-.75 2.5-3.25 4.25-6 4.25h-6.5c-2.75 0-5.25-1.75-6-4.25Zm6.75 4.25l-.5 2.5h6l-.5-2.5");
}
</style><path class="dsboirjzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fasting-plate-sharp"} {...others} />);
}

export default Component;
