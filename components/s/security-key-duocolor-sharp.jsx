import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r5pfwdbos {
  stroke-opacity: 0.4;
  d: path("M15 9h6v6h-6");
}

.zneykhbxf {
  d: path("M3 7h12v10H3Zm6 4v2m12-1h-2");
}
</style><g class="nrj6p8qat"><path class="r5pfwdbos"/><path class="zneykhbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-key-duocolor-sharp"} {...others} />);
}

export default Component;
