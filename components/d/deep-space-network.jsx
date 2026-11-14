import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9e6r01ch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8C3.5 14 9 19.5 15 19.5ZM7 16v5.5m-3 0h6m-.75-7.75l3.25-3.25m.906-3.381a3.5 3.5 0 0 1 2.475 2.475m-2.165-5.988a7 7 0 0 1 5.678 5.678");
}
</style><path class="x9e6r01ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:deep-space-network"} {...others} />);
}

export default Component;
