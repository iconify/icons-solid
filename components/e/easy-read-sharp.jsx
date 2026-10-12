import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.iouialbut {
  d: path("m7.75 12.5l2-2l1.5 1.5l3-3.25l2.5 2.75M8 16h8m-8 2.5h5");
}

.ukn7g3d-n {
  cx: 8.75px;
  cy: 6.5px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><circle class="ukn7g3d-n"/><path class="iouialbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:easy-read-sharp"} {...others} />);
}

export default Component;
