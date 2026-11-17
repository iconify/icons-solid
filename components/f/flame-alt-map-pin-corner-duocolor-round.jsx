import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkxxvu29s {
  stroke-opacity: 0.4;
  d: path("M7.5 21C3 17.5 5 14.5 9 11a28 28 0 0 1 1.817 1.718M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vmxfstgak {
  d: path("M10 21H7.5C-1 14 5 8 9 3c1.663 2.078 3.671 4.33 4.84 6.754");
}
</style><g class="nrj6p8qat"><path class="nkxxvu29s"/><path class="vmxfstgak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flame-alt-map-pin-corner-duocolor-round"} {...others} />);
}

export default Component;
