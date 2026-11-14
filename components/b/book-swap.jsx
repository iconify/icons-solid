import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6h2zm_6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5H9A1.5 1.5 0 0 1 10.5 4v6A1.5 1.5 0 0 1 9 11.5H5.5A1.5 1.5 0 0 1 4 10V4a1.5 1.5 0 0 1 1.5-1.5m9.5 0h3.5A1.5 1.5 0 0 1 20 4v6a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 15 2.5m-8.25 0v9m9.5-9v9M4 16.5h16l-2.25-2.25M20 19.5H4l2.25 2.25");
}
</style><path class="h6h2zm_6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:book-swap"} {...others} />);
}

export default Component;
