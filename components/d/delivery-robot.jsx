import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_qhkcdfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6h3a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 6 10.5A4.5 4.5 0 0 1 10.5 6M12 3v3m-2.5 4.5h.01m4.99 0h.01M6.25 18a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="h_qhkcdfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:delivery-robot"} {...others} />);
}

export default Component;
