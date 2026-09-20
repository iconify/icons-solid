import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c46fyy1pe {
  d: path("m16 12 3 3 -3 3");
}

.hu-almbms {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 7h9v8h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sbiy6014w {
  d: path("M3 7h9v8h7");
}

.u2dqufgpv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 12 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="hu-almbms"/><path class="u2dqufgpv"/><path class="sbiy6014w"/><path class="c46fyy1pe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:fallback-duotone-regular"} {...others} />);
}

export default Component;
