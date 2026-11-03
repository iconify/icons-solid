import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k8j4vpoky {
  d: path("M8.5 6L8.5 2L15.5 2L15.5 6M12 9L12 14M8.7071 10.7071L12 14L15.2929 10.7071M2 22L22 22");
}

.sp3m5n4qu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 6L22 18C22 18.5523 21.5523 19 21 19L3 19C2.4477 19 2 18.5523 2 18L2 6C2 5.4477 2.4477 5 3 5L21 5C21.5523 5 22 5.4477 22 6Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="sp3m5n4qu"/><path class="k8j4vpoky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:briefcase-arrow-down-sharp-duotone"} {...others} />);
}

export default Component;
