import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5va0w9vo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.09 17.5h11.82a2.625 2.625 0 0 0 2.502-3.421l-1.83-5.75A2.625 2.625 0 0 0 16.081 6.5H7.919a2.625 2.625 0 0 0-2.501 1.829l-1.83 5.75A2.625 2.625 0 0 0 6.09 17.5M7.5 11h9");
}
</style><path class="l5va0w9vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:iron-ingot"} {...others} />);
}

export default Component;
