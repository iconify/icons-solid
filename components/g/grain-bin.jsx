import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.af9r0cicv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 20.65v-9.3q0-.6-.6-.6h-.3q-.6 0-.13-.37l8.31-6.51q.47-.37.94 0l8.31 6.51q.47.37-.13.37h-.3q-.6 0-.6.6v9.3q0 .6-.6.6H4.85q-.6 0-.6-.6m0-9.9h15.5M8 13.75v4.5m4-4.5v4.5m4-4.5v4.5");
}
</style><path class="af9r0cicv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grain-bin"} {...others} />);
}

export default Component;
