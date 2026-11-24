import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.t_pl0bchx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 5l10 15h-6Z");
}

.w5i1dea2c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 5l10 15H2zm0 0l4 15");
}
</style><g class="ft5dv1b6b"><path class="t_pl0bchx"/><path class="w5i1dea2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pyramid-duotone-sharp"} {...others} />);
}

export default Component;
