import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.llo3_5w4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5h7A3.5 3.5 0 0 1 19 8v10a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18V8a3.5 3.5 0 0 1 3.5-3.5m0-2v4m3.5-4v4m3.5-4v4m-7.5 4h8m-8 4h8m-8 4h5");
}
</style><path class="llo3_5w4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:notebook-shorthand"} {...others} />);
}

export default Component;
