import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.llna05bzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v4.5m-2 0h5.5V9h5.75v2.5H15.5v1.75h-7V11.5H2.75V9H8.5V7.25zm-1 8.5h6a3 3 0 0 1-6 0Z");
}
</style><path class="llna05bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ceiling-fan-sharp"} {...others} />);
}

export default Component;
