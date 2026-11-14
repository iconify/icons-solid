import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr0gsvrdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m11 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m-5.5-9a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m11.5-2h.01");
}
</style><path class="dr0gsvrdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:petanque"} {...others} />);
}

export default Component;
