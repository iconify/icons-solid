import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.rbp29tbnz {
  d: path("M9 12a1.5 1.5 0 0 1 1.5 -1.5h3A1.5 1.5 0 0 1 15 12a1.5 1.5 0 0 1 -1.5 1.5h-3A1.5 1.5 0 0 1 9 12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="d8z1r1beo"/><path class="wzx0dxb2r"/><path class="rbp29tbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:refresh-token-api-outline-bold"} {...others} />);
}

export default Component;
