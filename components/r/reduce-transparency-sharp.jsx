import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfwfgvbhl {
  d: path("M10.5 10.5h10.75v10.75H10.5z");
}

.imq4_mabh {
  d: path("M2.75 2.75h12v12h-12zM6 9.5L9.5 6M6 13l7-7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gfwfgvbhl"/><path class="imq4_mabh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reduce-transparency-sharp"} {...others} />);
}

export default Component;
