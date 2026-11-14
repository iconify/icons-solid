import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ksl8nzb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19M8.658 4.906l1.557 1.89a1.5 1.5 0 0 1 0 1.908l-1.557 1.89a1.5 1.5 0 0 1-2.316 0l-1.557-1.89a1.5 1.5 0 0 1 0-1.908l1.557-1.89a1.5 1.5 0 0 1 2.316 0m9 0l1.557 1.89a1.5 1.5 0 0 1 0 1.908l-1.557 1.89a1.5 1.5 0 0 1-2.316 0l-1.557-1.89a1.5 1.5 0 0 1 0-1.908l1.557-1.89a1.5 1.5 0 0 1 2.316 0M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="ksl8nzb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:milestone-search"} {...others} />);
}

export default Component;
