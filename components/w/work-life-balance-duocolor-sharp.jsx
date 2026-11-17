import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldmwtnb6g {
  stroke-opacity: 0.4;
  d: path("M3 6h8v5H3Zm2 0V3h4v3m9 .667c-.667-1.334-3-1.334-3 .666S18 11 18 11s3-1.667 3-3.667s-2.333-2-3-.666");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s94j2acll {
  d: path("M3 15h18m-9 0v6m-4 0h8");
}
</style><g class="nrj6p8qat"><path class="ldmwtnb6g"/><path class="s94j2acll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:work-life-balance-duocolor-sharp"} {...others} />);
}

export default Component;
