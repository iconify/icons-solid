import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9momdbyb {
  d: path("M3 13.25h18l-2 6a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 5 19.25ZM9 3L5 5l1.5 3L8 7.5v3h8v-3l1.5.5L19 5l-4-2q-3 2-6 0Z");
}

.ityt4eb3g {
  d: path("M6.5 17q2.75-1.5 5.5 0t5.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9momdbyb"/><path class="ityt4eb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wash-by-hand"} {...others} />);
}

export default Component;
