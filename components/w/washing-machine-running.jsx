import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvtg-f7_p {
  d: path("M9.75 14.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m.54 4.698A5 5 0 0 1 7.67 12m6.04-2.198A5 5 0 0 1 16.33 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6qfbwj_y {
  d: path("M8.375 2h7.25A4.375 4.375 0 0 1 20 6.375v11.25A4.375 4.375 0 0 1 15.625 22h-7.25A4.375 4.375 0 0 1 4 17.625V6.375A4.375 4.375 0 0 1 8.375 2M4 6.5h16");
}
</style><g class="hntgybcog"><path class="z6qfbwj_y"/><path class="dvtg-f7_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:washing-machine-running"} {...others} />);
}

export default Component;
