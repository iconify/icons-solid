import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5xx-fhdx {
  fill: currentColor;
  d: path("M12 2L12 22L5 22C2.7909 22 1 20.2091 1 18L1 6C1 3.7909 2.7909 2 5 2L12 2Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pbczp8bjd {
  stroke-opacity: 0.4;
  d: path("M19.8284 5C19.4046 3.8014 18.2713 3 17 3L11 3M11 21L17 21C18.2713 21 19.4046 20.1986 19.8284 19");
}

.v5k4pb70x {
  d: path("M19 9L19 15M16 12L22 12");
}
</style><g class="nrj6p8qat"><path class="pbczp8bjd"/><path class="b5xx-fhdx"/><path class="v5k4pb70x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-columns-add-after-duotone"} {...others} />);
}

export default Component;
