import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.df_fnfbul {
  d: path("M3 13a4 6.5 0 1 0 8 0a4 6.5 0 1 0-8 0Z");
}

.m75nhibta {
  d: path("M7 6.5h10.5a4 6.5 0 0 1 0 13H7");
}

.owi6a9bzg {
  d: path("M7 16a2 3 0 1 1 2-3m2-6.5l-.75-2.75M14.5 6.5l-.75-2.75M18 6.5L17.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="df_fnfbul"/><path class="m75nhibta"/><path class="owi6a9bzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:turf-roll"} {...others} />);
}

export default Component;
