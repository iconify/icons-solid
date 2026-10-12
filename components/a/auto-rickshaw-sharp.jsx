import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5_xrjbae {
  d: path("M20.5 14.5V4.25h-13l-.75 2l-1.25 4H3.25v4.25Z");
}

.dmb4gdc-s {
  cx: 17.5px;
  cy: 19.25px;
  r: 1.75px;
}

.e3ijufb_j {
  cx: 5.5px;
  cy: 19.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c5_xrjbae"/><circle class="e3ijufb_j"/><circle class="dmb4gdc-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:auto-rickshaw-sharp"} {...others} />);
}

export default Component;
