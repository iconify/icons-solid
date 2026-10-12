import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dstegoapl {
  d: path("m8.25 4.75l-4 4l4 4");
}

.t370ar8xl {
  d: path("M18.75 20.25v-6.5a5 5 0 0 0-5-5h-9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t370ar8xl"/><path class="dstegoapl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:turn-sharp-left-sharp"} {...others} />);
}

export default Component;
