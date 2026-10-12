import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h20aubbid {
  d: path("m3.75 20.25l3.63-3.63m4.24-4.24l6.63-6.63l1.186-1.311l-2.5-2.5L15.75 3.25l-.5.5");
}

.nommkzbbu {
  d: path("m12.15 12.91l-1.06-1.06l-.53-.53l-.53.53l-3.18 3.18l-.53.53l.53.53l1.06 1.06l.53.53l.53-.53l3.18-3.18l.53-.53z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h20aubbid"/><path class="nommkzbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crochet-hook-sharp"} {...others} />);
}

export default Component;
