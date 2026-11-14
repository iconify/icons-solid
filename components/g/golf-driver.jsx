import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v7y19lnlk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.5 2.5l-9 13m0 0c-3-1.25-8.5 0-8.5 3.25c0 2 2 2.75 5 2.75h3.5c1.25 0 1.75-1 1.25-2Zm5-11l2.75 2");
}
</style><path class="v7y19lnlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:golf-driver"} {...others} />);
}

export default Component;
