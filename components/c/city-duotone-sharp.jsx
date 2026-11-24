import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.gcgmn5bkr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M9 21V3h6v18M12 7h.01M12 11h.01M12 15h.01M6 13h.01M6 17h.01M18 17h.01M9 9H3v12m12-8h6v8");
}

.ob2--58tq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h6v18H9Z");
}
</style><g class="ft5dv1b6b"><path class="ob2--58tq"/><path class="gcgmn5bkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:city-duotone-sharp"} {...others} />);
}

export default Component;
