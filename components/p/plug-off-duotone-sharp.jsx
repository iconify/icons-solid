import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ll10lcobq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 16V7h9Zm12-6v7h-7Z");
}

.viko-ibsd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 16V7h9m3 3v7h-7m1 0v4M9 3v4m6-4v4M2 20L20 2");
}
</style><g class="ft5dv1b6b"><path class="ll10lcobq"/><path class="viko-ibsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plug-off-duotone-sharp"} {...others} />);
}

export default Component;
