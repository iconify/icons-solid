import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n2cze8b3i {
  stroke-opacity: 0.4;
  d: path("m13 13l3-8l5 5v5h-2l-1-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rivtgs6sw {
  d: path("M3 18a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m3-2V8h3l4 4v4m-7-4h6");
}
</style><g class="nrj6p8qat"><path class="n2cze8b3i"/><path class="rivtgs6sw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:excavator-duocolor-sharp"} {...others} />);
}

export default Component;
