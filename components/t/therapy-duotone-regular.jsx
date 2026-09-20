import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fm7_cob8y {
  d: path("M5 17v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wyl_gxxnb {
  d: path("M19 17v3");
}

.z0giekeys {
  d: path("M2 17V8h4v4h12V8h4v9Z");
}

.zod1g_eaq {
  fill: currentColor;
  d: path("M2 17V8h4v4h12V8h4v9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zod1g_eaq"/><path class="z0giekeys"/><path class="fm7_cob8y"/><path class="wyl_gxxnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:therapy-duotone-regular"} {...others} />);
}

export default Component;
