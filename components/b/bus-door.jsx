import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds6tarbuz {
  d: path("M9 19v-7.5h6V19m-3-7.5V19m-6 0v2.5M18 19v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zt6dvwbyu {
  d: path("M4 2.5h16V19H4Zm0 6h16");
}
</style><g class="ulnmmdpxh"><path class="zt6dvwbyu"/><path class="ds6tarbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bus-door"} {...others} />);
}

export default Component;
