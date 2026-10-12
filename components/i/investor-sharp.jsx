import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emn90tj_k {
  d: path("M3.5 20.25h8.75v-.75c0-3.62-2.17-6.25-4.75-6.25s-4.75 2.63-4.75 6.25v.75zm11.75-10h6v11h-6zm0 3.75h6m-6 3.5h6");
}

.se6ixebfq {
  cx: 7.5px;
  cy: 7.75px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="se6ixebfq"/><path class="emn90tj_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:investor-sharp"} {...others} />);
}

export default Component;
