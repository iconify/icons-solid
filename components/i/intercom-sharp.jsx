import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.km8emob2x {
  cx: 12px;
  cy: 16.25px;
  r: 1.75px;
}

.spd5o1b1t {
  d: path("M5.25 2.75h13.5v18.5H5.25zm3.75 4h6m-6 2.5h6m-6 2.5h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="spd5o1b1t"/><circle class="km8emob2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:intercom-sharp"} {...others} />);
}

export default Component;
