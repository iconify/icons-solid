import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjxaeccem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm.383-3.332L16.539 2.88a1.5 1.5 0 0 1 1.923.896a1.5 1.5 0 0 1-.897 1.923L4.41 10.487a1.5 1.5 0 0 1-1.923-.897a1.5 1.5 0 0 1 .896-1.922m6.578-2.394l-.383 3.332m5.082-5.042l-.384 3.332");
}
</style><path class="sjxaeccem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clapper-take"} {...others} />);
}

export default Component;
