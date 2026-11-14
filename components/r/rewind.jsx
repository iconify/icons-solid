import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vlo5upfud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.241 7.948l-3.716 2.622a1.75 1.75 0 0 0 0 2.86l3.716 2.622A1.75 1.75 0 0 0 21 14.623V9.377a1.75 1.75 0 0 0-2.759-1.429m-9.5 0L5.025 10.57a1.75 1.75 0 0 0 0 2.86l3.716 2.622a1.75 1.75 0 0 0 2.759-1.429V9.377a1.75 1.75 0 0 0-2.759-1.429");
}
</style><path class="vlo5upfud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rewind"} {...others} />);
}

export default Component;
