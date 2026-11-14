import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kzb3285on {
  d: path("M3 17.5h7.4m10.2 0h.4M2 7.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm2.75-1h.01m2.99 0h.01");
}

.slg_stbtc {
  d: path("M16 8.5q1.75 1.75 3.5 0m-6.25 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbc2qlbbh {
  d: path("M4.5 9.75Q6.25 8 8 9.75m5.5-2.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm2.75-1h.01m2.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="kzb3285on"/><path class="wbc2qlbbh"/><path class="slg_stbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:employee-nps"} {...others} />);
}

export default Component;
