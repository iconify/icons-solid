import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ziesv0bhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m9 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-4.5 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M2.5 19.5h19M8 16.75l-1.5-2m9.5 2l1.5-2");
}
</style><path class="ziesv0bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:groundbait"} {...others} />);
}

export default Component;
