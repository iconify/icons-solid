import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.guglhac8i {
  stroke-opacity: 0.4;
  d: path("M8 14h.01M16 14h.01");
}

.izwppwbwo {
  d: path("M4 18v-8l3-6h10l3 6v8zm2 0h2v2H6Zm10 0h2v2h-2ZM3 10h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="guglhac8i"/><path class="izwppwbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:car-duocolor-sharp"} {...others} />);
}

export default Component;
