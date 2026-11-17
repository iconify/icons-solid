import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evo4oibgj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 3s3 2.143 3 4.714a3 3 0 1 1-6 0C15 5.143 18 3 18 3M8 8.143s5 3.571 5 7.857a5 5 0 0 1-10 0c0-4.286 5-7.857 5-7.857");
}

.ft5dv1b6b {
  fill: none;
}

.sgqvhle8l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8.143S3 11.714 3 16a5 5 0 0 0 10 0c0-4.286-5-7.857-5-7.857M18 3s-3 2.143-3 4.714a3 3 0 0 0 6 0C21 5.143 18 3 18 3");
}
</style><g class="ft5dv1b6b"><path class="evo4oibgj"/><path class="sgqvhle8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:droplets-duotone-round"} {...others} />);
}

export default Component;
