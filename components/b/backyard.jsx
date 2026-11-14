import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfm_g65hg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5a8.5 6 0 0 1 17 0Zm0 0h17a8.5 6.5 0 0 1-17 0M7 14.75L5.5 21.5M17 14.75l1.5 6.75M12 16v5.5m-1.5-15h3");
}
</style><path class="cfm_g65hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:backyard"} {...others} />);
}

export default Component;
