import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev1uqxt7k {
  d: path("m4.5 7.75l7.5 4l7.5-4m-7.5 4v8.5");
}

.gjnph2f5p {
  d: path("m13.32 3.47l5.61 3.06l1.32.72v9.5l-1.32.72l-5.61 3.06l-1.32.72l-1.32-.72l-5.61-3.06l-1.32-.72v-9.5l1.32-.72l5.61-3.06L12 2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gjnph2f5p"/><path class="ev1uqxt7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cube-wireframe-sharp"} {...others} />);
}

export default Component;
