import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdcan6b_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 5.5h6.75A2.625 2.625 0 0 1 14.5 8.125v.25A2.625 2.625 0 0 1 11.875 11h-6.75A2.625 2.625 0 0 1 2.5 8.375v-.25A2.625 2.625 0 0 1 5.125 5.5m0 8.25h13.75a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.625v-.25a2.625 2.625 0 0 1 2.625-2.625M8.5 5.5V11");
}
</style><path class="fdcan6b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:l-cut"} {...others} />);
}

export default Component;
