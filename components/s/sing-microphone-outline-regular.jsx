import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dam2g8x5x {
  d: path("M6 11a6 6 0 0 0 12 0");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.suyg0ubax {
  d: path("M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1 -6 0V6a3 3 0 0 1 3 -3");
}
</style><g class="nrj6p8qat"><path class="suyg0ubax"/><path class="dam2g8x5x"/><path class="ffs26fbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:sing-microphone-outline-regular"} {...others} />);
}

export default Component;
