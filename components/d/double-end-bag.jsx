import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ot7z-enmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10m-5 0v3m0 0C15.5 8 16.5 10 16.5 12a4.5 4.5 0 0 1-9 0c0-2 1-4 4.5-6.5m0 11v5m-5 0h10");
}
</style><path class="ot7z-enmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:double-end-bag"} {...others} />);
}

export default Component;
