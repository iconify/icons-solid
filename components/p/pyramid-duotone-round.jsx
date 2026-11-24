import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvkid3bem {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 5l8.89 13.336A1.07 1.07 0 0 1 20 20H4a1.07 1.07 0 0 1-.89-1.664zm0 0l4 15");
}

.ft5dv1b6b {
  fill: none;
}

.uc1iu5nqj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 5l8.891 13.336A1.071 1.071 0 0 1 20 20h-4Z");
}
</style><g class="ft5dv1b6b"><path class="uc1iu5nqj"/><path class="bvkid3bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pyramid-duotone-round"} {...others} />);
}

export default Component;
