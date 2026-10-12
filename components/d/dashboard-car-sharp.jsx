import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cj0oukb-z {
  d: path("M11 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-3 0l1.5-1.5M19 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-3 0l-1.5-1.5");
}

.qp45nix1v {
  d: path("M2.75 6.5h18.5v11H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qp45nix1v"/><path class="cj0oukb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dashboard-car-sharp"} {...others} />);
}

export default Component;
