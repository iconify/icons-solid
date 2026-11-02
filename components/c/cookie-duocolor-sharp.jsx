import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4vzbdcfo {
  stroke-opacity: 0.4;
  d: path("M10 17h.01M15 15h.01M11 12h.01M16 10h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rlxi8fbwi {
  d: path("M12 3a9 9 0 1 1-9 9a4.53 4.53 0 0 0 5-4a4.53 4.53 0 0 0 4-5M3 7h.01M4 3h.01M8 3h.01");
}
</style><g class="nrj6p8qat"><path class="j4vzbdcfo"/><path class="rlxi8fbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cookie-duocolor-sharp"} {...others} />);
}

export default Component;
