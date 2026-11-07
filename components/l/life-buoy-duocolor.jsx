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

.ttv-p3bie {
  stroke-opacity: 0.4;
  d: path("m6 6l3 3m9-3l-3 3m3 9l-3-3m-9 3l3-3");
}

.wwcz9bcnj {
  d: path("M6 6a8.485 8.485 0 1 1 12 12A8.485 8.485 0 0 1 6 6m3 3a4.243 4.243 0 1 1 6 6a4.243 4.243 0 0 1-6-6");
}
</style><g class="nrj6p8qat"><path class="ttv-p3bie"/><path class="wwcz9bcnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:life-buoy-duocolor"} {...others} />);
}

export default Component;
