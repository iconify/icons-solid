import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aau43sk9w {
  d: path("M10 4.75h4v6.75h-4zm4.5 12.5H18");
}

.v65jr_b0s {
  d: path("M2.75 4.75h18.5v16.5H2.75zm0 4.5h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v65jr_b0s"/><path class="aau43sk9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parcel-box-sharp"} {...others} />);
}

export default Component;
