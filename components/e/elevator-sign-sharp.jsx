import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.pmzb0fbyj {
  d: path("m12.47 6.59l2.06 2.57l.47.59H9l.47-.59l2.06-2.57L12 6zm-2.72 7.66H15l-.47.59l-2.06 2.57L12 18l-.47-.59l-2.06-2.57l-.47-.59z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="pmzb0fbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:elevator-sign-sharp"} {...others} />);
}

export default Component;
