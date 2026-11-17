import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3tl3cc2c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 5a4.243 4.243 0 0 1 6 6l-6 6H7v-6ZM4 20L16 8m1 5h-6");
}

.ft5dv1b6b {
  fill: none;
}

.p9auc65lh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 5a4.242 4.242 0 1 1 6 6l-6 6H7v-6Z");
}
</style><g class="ft5dv1b6b"><path class="p9auc65lh"/><path class="c3tl3cc2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:feather-duotone-sharp"} {...others} />);
}

export default Component;
