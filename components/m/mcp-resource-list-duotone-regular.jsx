import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chwfr3btt {
  fill: currentColor;
  d: path("M13 2h-3L7 5v12h10V7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sk9ov1b7d {
  d: path("M16 7h-3l-3 3v12h10V12");
}

.t-tlxbnvp {
  d: path("M13 2h-3L7 5v12h10V7");
}

.uw59zbbfm {
  fill: currentColor;
  d: path("M16 7h-3l-3 3v12h10V12");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="chwfr3btt"/><path class="uw59zbbfm"/><path class="t-tlxbnvp"/><path class="sk9ov1b7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-resource-list-duotone-regular"} {...others} />);
}

export default Component;
