import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyz49obcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m10.75 8.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M16.75 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 8.5h.01m3.24 3h.01");
}
</style><path class="iyz49obcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:microbiome"} {...others} />);
}

export default Component;
