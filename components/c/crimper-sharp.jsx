import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.td36q-bft {
  d: path("M10 12.33c-2 2.5-3 5.5-2.5 8.92m6.5-8.92c2 2.5 3 5.5 2.5 8.92");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytohg3bay {
  d: path("M9.65 3.34a5 5 0 1 0 4.7 0l-.75 4.41l-.8 1.39h-1.6l-.8-1.39Z");
}
</style><g class="x2cwu0gfd"><path class="ytohg3bay"/><path class="td36q-bft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crimper-sharp"} {...others} />);
}

export default Component;
