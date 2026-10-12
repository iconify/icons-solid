import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbn9ahbbt {
  d: path("M2.75 6.75h18.5v10.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7hhsvtxz {
  d: path("M6.75 10h3.5v4H6v-4zm7.75 0H18v4h-4.25v-4z");
}
</style><g class="x2cwu0gfd"><path class="qbn9ahbbt"/><path class="y7hhsvtxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cinder-block-sharp"} {...others} />);
}

export default Component;
