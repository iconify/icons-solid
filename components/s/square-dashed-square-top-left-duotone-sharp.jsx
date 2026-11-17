import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cp7bxx4rp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h11v11H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.rr230y0hx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 3h3v3m0 12v3h-3M6 21H3v-3m18-8v4m-7 7h-4M3 3h11v11H3Z");
}
</style><g class="ft5dv1b6b"><path class="cp7bxx4rp"/><path class="rr230y0hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-top-left-duotone-sharp"} {...others} />);
}

export default Component;
