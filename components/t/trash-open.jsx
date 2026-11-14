import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kb-50bi4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.353 9h7.294a2.625 2.625 0 0 1 2.616 2.843l-.562 6.75A2.625 2.625 0 0 1 15.085 21h-6.17a2.625 2.625 0 0 1-2.616-2.407l-.562-6.75A2.625 2.625 0 0 1 8.353 9M3.5 6.5l16.421-4.4M10 12.5v5m4-5v5");
}
</style><path class="kb-50bi4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trash-open"} {...others} />);
}

export default Component;
