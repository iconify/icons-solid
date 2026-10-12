import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gdgesebuz {
  d: path("M9.75 8.25v5.25h5.75l2.25 5.75h2.5M5.36 11.86a5.5 5.5 0 1 0 8.65 6.64");
}

.r0u3ypbyz {
  cx: 9.75px;
  cy: 4.75px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="r0u3ypbyz"/><path class="gdgesebuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wheelchair-sharp"} {...others} />);
}

export default Component;
