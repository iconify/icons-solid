import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sx_wyqbjl {
  d: path("M9 4.5H5.75v16.75h12.5V4.5H15");
}

.wdv75-boe {
  d: path("M9 2.75h6v3.5H9zM9 10h6m-6 3.5h6M9 17h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sx_wyqbjl"/><path class="wdv75-boe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stock-count-sharp"} {...others} />);
}

export default Component;
