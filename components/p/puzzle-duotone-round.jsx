import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hzjx6ibud {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 7h1a4 4 0 0 1 4 4v1a2.236 2.236 0 1 0 0 4v1a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-1a2.236 2.236 0 1 1 0-4v-1a4 4 0 0 1 4-4h1a2.236 2.236 0 1 1 4 0");
}

.i2fx_ebhl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 7a4 4 0 0 1 4 4v1a2.235 2.235 0 1 0 0 4v1a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-1a2.235 2.235 0 1 1 0-4v-1a4 4 0 0 1 4-4h1a2.235 2.235 0 1 1 4 0Z");
}
</style><g class="ft5dv1b6b"><path class="i2fx_ebhl"/><path class="hzjx6ibud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:puzzle-duotone-round"} {...others} />);
}

export default Component;
