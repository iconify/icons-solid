import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mlvjywbib {
  d: path("M12 16.75v4.5m-4.25 0h8.5");
}

.o8w52mbli {
  cx: 12px;
  cy: 9.75px;
  r: 7px;
}

.t8ttqnb2f {
  cx: 12px;
  cy: 9.75px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="o8w52mbli"/><circle class="t8ttqnb2f"/><path class="mlvjywbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:webcam-off-sharp"} {...others} />);
}

export default Component;
