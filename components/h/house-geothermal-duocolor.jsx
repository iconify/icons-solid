import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv8jz9bfg {
  stroke-opacity: 0.4;
  d: path("M12 15v4m-6 2v-2h12v2m-8-2v2m4-2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z4yx2o2ei {
  d: path("M12 15H8.667a2 2 0 0 1-2-2V8.574A2 2 0 0 1 7.35 7.07l3.333-2.917a2 2 0 0 1 2.634 0L16.65 7.07a2 2 0 0 1 .683 1.505V13a2 2 0 0 1-2 2z");
}
</style><g class="nrj6p8qat"><path class="bv8jz9bfg"/><path class="z4yx2o2ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-geothermal-duocolor"} {...others} />);
}

export default Component;
