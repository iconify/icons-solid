import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m2qdb_b7x {
  d: path("M14 3L5 21m5-18l9 18M3 21h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sp4f4x76l {
  stroke-opacity: 0.4;
  d: path("m10 21l2-5l2 5");
}
</style><g class="nrj6p8qat"><path class="sp4f4x76l"/><path class="m2qdb_b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tent-duocolor-sharp"} {...others} />);
}

export default Component;
