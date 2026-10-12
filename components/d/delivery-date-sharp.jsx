import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g11y-v37c {
  cx: 16.75px;
  cy: 7.25px;
  r: 4.5px;
}

.ghx4t3bny {
  d: path("M16.75 5.25v2l1.5 1");
}

.m9kyy-b1p {
  d: path("M2.75 8.75h11.5v12.5H2.75zm5.75 0v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m9kyy-b1p"/><circle class="g11y-v37c"/><path class="ghx4t3bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:delivery-date-sharp"} {...others} />);
}

export default Component;
