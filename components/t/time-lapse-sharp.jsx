import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkicgpbhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.81 2.79a9.3 9.3 0 0 1 3.1.83m1.4.8a9.3 9.3 0 0 1 2.27 2.27m.8 1.4a9.3 9.3 0 0 1 .83 3.1m0 1.62a9.3 9.3 0 0 1-.83 3.1m-.8 1.4a9.3 9.3 0 0 1-2.27 2.27m-1.4.8a9.3 9.3 0 0 1-3.1.83m-1.62 0a9.3 9.3 0 0 1-3.1-.83m-1.4-.8a9.3 9.3 0 0 1-2.27-2.27m-.8-1.4a9.3 9.3 0 0 1-.83-3.1m0-1.62a9.3 9.3 0 0 1 .83-3.1m.8-1.4a9.3 9.3 0 0 1 2.27-2.27m1.4-.8a9.3 9.3 0 0 1 3.1-.83M12 7.5V12l3 2");
}
</style><path class="wkicgpbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:time-lapse-sharp"} {...others} />);
}

export default Component;
