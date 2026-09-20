import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.am6m0sb5o {
  d: path("M16 4.5 19.5 8 16 11.5 12.5 8Z");
}

.aoul07b2h {
  fill: currentColor;
  d: path("M16 4.5 19.5 8 16 11.5 12.5 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jnvfxxwun {
  d: path("m7 21 5 -5");
}

.nkayykbew {
  d: path("m3 19 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aoul07b2h"/><path class="am6m0sb5o"/><path class="nkayykbew"/><path class="jnvfxxwun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:meteor-duotone-regular"} {...others} />);
}

export default Component;
