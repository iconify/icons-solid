import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmc28icvq {
  d: path("M3 16L7 16M10 10L14 10M17 14L21 14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ogwjrkbue {
  stroke-opacity: 0.4;
  d: path("M5 3L5 12M5 21L5 16M12 3L12 10M12 21L12 14M19 3L19 10M19 21L19 14");
}
</style><g class="nrj6p8qat"><path class="ogwjrkbue"/><path class="fmc28icvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-vertical-two-tone"} {...others} />);
}

export default Component;
