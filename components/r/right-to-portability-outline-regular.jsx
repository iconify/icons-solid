import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tcu89np8z {
  d: path("m13.5 11 2.5 2.5 -2.5 2.5");
}

.yqc0twwou {
  d: path("M8 13.5h8");
}
</style><g class="nrj6p8qat"><path class="bn_pu6j-z"/><path class="yqc0twwou"/><path class="tcu89np8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:right-to-portability-outline-regular"} {...others} />);
}

export default Component;
